class CauseController {
    async addCause(req, res) {
         console.log(req.body, "I am from CauseController.js");
        res.json({
            message: "Cause added successfully",
            causeData: req.body,
        });
    }
}

module.exports = CauseController;