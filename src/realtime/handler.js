const models = require("../models");

module.exports = async (io, socket) => {
  socket.on("join-room", (room) => {
    console.log(room);
    socket.join(room);
  });
  socket.on("send-comment", async (mesage, userId, blogId) => {
    const blogIdInt = parseInt(blogId);
    const comment = await models.BlogComment.create({
      content: mesage,
      userId: userId,
      blogId: blogIdInt,
    });
    const result = await models.BlogComment.findByPk(comment.id, {
      include: {
        model: models.User,
        attributes: { exclude: ["password"] },
      },
    });
    socket.to(blogId).emit("receive-comment", result);
  });
  socket.on("send-comment-lesson", async (mesage, userId, lessonId) => {
    const lessonIdInt = parseInt(lessonId);
    const comment = await models.LessonComment.create({
      content: mesage,
      userId: userId,
      lessonId: lessonIdInt,
    });
    const result = await models.LessonComment.findByPk(comment.id, {
      include: {
        model: models.User,
        attributes: { exclude: ["password"] },
      },
    });
    socket.to(lessonId).emit("receive-comment-lesson", result);
  });
};
