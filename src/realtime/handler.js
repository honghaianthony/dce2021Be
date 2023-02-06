const models = require('../models');

const users = {};

const socketToRoom = {};

module.exports = async (io, socket) => {
    socket.on('join-room', (room) => {
        // console.log(room);
        socket.join(room);
    });

    socket.on('join--room', (roomID) => {
        if (users[roomID]) {
            const length = users[roomID].length;
            if (length === 4) {
                socket.emit('room-full');
                return;
            }
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        console.log(`User ${socket.id} has joined room ${roomID}`);
        const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);

        socket.emit('all-users', usersInThisRoom);
    });

    socket.on('sending-signal', (payload) => {
        io.to(payload.userToSignal).emit('user-joined', {
            signal: payload.signal,
            callerID: payload.callerID,
        });
    });

    socket.on('returning-signal', (payload) => {
        io.to(payload.callerID).emit('receiving-returned-signal', {
            signal: payload.signal,
            id: socket.id,
        });
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter((id) => id !== socket.id);
            users[roomID] = room;
        }
    });

    socket.on('send-comment-blog', async (mesage, userId, blogId) => {
        const comment = await models.BlogComment.create({
            blogId: blogId,
            userId: userId,
            content: mesage,
        });

        const commentResult = await models.BlogComment.findById({
            _id: comment._id,
        }).populate('userId');

        socket.to(blogId).emit('receive-comment-blog', commentResult);
    });
    socket.on('send-comment-lesson', async (mesage, userId, lessonId) => {
        const comment = await models.LessonComment.create({
            lessonId: lessonId,
            userId: userId,
            content: mesage,
        });

        const commentResult = await models.LessonComment.findById({
            _id: comment._id,
        }).populate('userId');

        socket.to(lessonId).emit('receive-comment-lesson', commentResult);
    });
};
