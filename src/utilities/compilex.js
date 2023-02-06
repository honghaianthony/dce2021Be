const compiler = require('compilex');
const option = { stats: true };
const fs = require('fs');
const path = require('path');

const compile = (code, input, inputRadio, lang) => {
    compiler.init(option);

    let result = {};
    if (lang === 'C' || lang === 'C++') {
        if (inputRadio === 'true') {
            var envData = {
                OS: 'windows',
                cmd: 'g++',
                options: { timeout: 1000 },
            };
            compiler.compileCPPWithInput(envData, code, input, function (data) {
                // if (data.error) {
                //   res.send(data.error);
                // } else {
                //   res.send(data.output);
                // }
                result.data = data;
            });
        } else {
            var envData = {
                OS: 'windows',
                cmd: 'g++',
                options: { timeout: 1000 },
            };
            compiler.compileCPP(envData, code, function (data) {
                // if (data.error) {
                //   res.send(data.error);
                // } else {
                //   res.send(data.output);
                // }
                result.data = data;
            });
        }
    }
    if (lang === 'Java') {
        if (inputRadio === 'true') {
            var envData = { OS: 'windows' };
            compiler.compileJavaWithInput(envData, code, function (data) {
                // res.send(data);
                result.data = data;
            });
        } else {
            var envData = { OS: 'windows' };
            compiler.compileJavaWithInput(
                envData,
                code,
                input,
                function (data) {
                    // res.send(data);
                    result.data = data;
                },
            );
        }
    }
    if (lang === 'Python') {
        if (inputRadio === 'true') {
            var envData = { OS: 'windows' };
            compiler.compilePythonWithInput(
                envData,
                code,
                input,
                function (data) {
                    // res.send(data);
                    result.data = data;
                },
            );
        } else {
            var envData = { OS: 'windows' };
            compiler.compilePython(envData, code, function (data) {
                // res.send(data);
                result.data = data;
            });
        }
    }
    //   if (lang === "CS") {
    //     if (inputRadio === "true") {
    //       var envData = { OS: "windows" };
    //       compiler.compileCSWithInput(envData, code, input, function (data) {
    //         res.send(data);
    //       });
    //     } else {
    //       var envData = { OS: "windows" };
    //       compiler.compileCS(envData, code, function (data) {
    //         res.send(data);
    //       });
    //     }
    //   }
    //   if (lang === "VB") {
    //     if (inputRadio === "true") {
    //       var envData = { OS: "windows" };
    //       compiler.compileVBWithInput(envData, code, input, function (data) {
    //         res.send(data);
    //       });
    //     } else {
    //       var envData = { OS: "windows" };
    //       compiler.compileVB(envData, code, function (data) {
    //         res.send(data);
    //       });
    //     }
    //   }
    return result;
};

const deleteTemp = () => {
    const directory = '/temp/';

    //   fs.rmdir(directory, { recursive: true }, () => {
    //     console.log("deleted");
    //   });

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), (err) => {
                if (err) throw err;
            });
        }
    });
};

module.exports = { compile, deleteTemp };
