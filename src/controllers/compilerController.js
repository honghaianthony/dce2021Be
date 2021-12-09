const compilerService = require("../services/compilerService");

module.exports = {
  compile: async function (req, res) {
    try {
      const result = await compilerService.compile(req, res);
    } catch (error) {
      res.status(500).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
