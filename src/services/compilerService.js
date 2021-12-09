const compiler = require("compilex");
const option = { stats: true };

module.exports = {
  compile: async function (req, res) {
    const { code, input, inputRadio, lang } = req.body;
    compiler.init(option);

    if (lang === "C" || lang === "C++") {
      if (inputRadio === "true") {
        var envData = { OS: "windows", cmd: "g++", options: { timeout: 1000 } };
        compiler.compileCPPWithInput(envData, code, input, function (data) {
          // if (data.error) {
          //   res.json(data.error);
          // } else {
          //   res.json(data.output);
          // }
          res.json(data);
        });
      } else {
        var envData = { OS: "windows", cmd: "g++", options: { timeout: 1000 } };
        compiler.compileCPP(envData, code, function (data) {
          // if (data.error) {
          //   res.json(data.error);
          // } else {
          //   res.json(data.output);
          // }
          res.json(data);
        });
      }
    }
    if (lang === "Java") {
      if (inputRadio === "true") {
        var envData = { OS: "windows" };
        compiler.compileJavaWithInput(envData, code, function (data) {
          res.json(data);
        });
      } else {
        var envData = { OS: "windows" };
        compiler.compileJavaWithInput(envData, code, input, function (data) {
          res.json(data);
        });
      }
    }
    if (lang === "Python") {
      if (inputRadio === "true") {
        var envData = { OS: "windows" };
        compiler.compilePythonWithInput(envData, code, input, function (data) {
          res.json(data);
        });
      } else {
        var envData = { OS: "windows" };
        compiler.compilePython(envData, code, function (data) {
          res.json(data);
        });
      }
    }
  },
};
