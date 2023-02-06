const compiler = require('compilex');
const option = { stats: true };
compiler.init(option);

module.exports = {
    compile: async function (req, res) {
        const { code, input, inputRadio, lang } = req.body;

        if (lang === 'C' || lang === 'C++') {
            if (inputRadio === 'true') {
                var envData = {
                    OS: 'windows',
                    cmd: 'g++',
                    options: { timeout: 3000 },
                };
                compiler.compileCPPWithInput(
                    envData,
                    code,
                    input,
                    function (data) {
                        console.log(data);
                        res.json(data);
                    },
                );
            } else {
                var envData = {
                    OS: 'windows',
                    cmd: 'g++',
                    options: { timeout: 3000 },
                };
                compiler.compileCPP(envData, code, function (data) {
                    res.json(data);
                });
            }
        }
        if (lang === 'Java') {
            if (inputRadio === 'true') {
                var envData = { OS: 'windows' };
                compiler.compileJavaWithInput(envData, code, function (data) {
                    res.json(data);
                });
            } else {
                var envData = { OS: 'windows' };
                compiler.compileJava(envData, code, function (data) {
                    res.json(data);
                });
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
                        res.json(data);
                    },
                );
            } else {
                var envData = { OS: 'windows' };
                compiler.compilePython(envData, code, function (data) {
                    res.json(data);
                });
            }
        }
    },
};
