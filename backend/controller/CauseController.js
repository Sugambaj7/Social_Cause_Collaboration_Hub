const Cause = require("../model/CauseModel");
const asyncWrapper = require("../middleware/asyncWrapper");

class CauseController {
      addCause = asyncWrapper(
        async (req, res, next) => {
            const {causeName, placeName, causeDescription, collaborationApplicationDeadline, time, startDate, endDate} = req.body;
            const newCause = new Cause({
                causeName,
                placeName,
                causeDescription,
                collaborationApplicationDeadline,
                time,
                startDate,
                endDate
            });

            await newCause.save();

            res.status(201).json({
                message: "Cause added successfully",
                causeData: newCause
            });
        }
    ) 
    async getCauses(req, res) {
        try{
            const causes = await Cause.find();
            res.status(200).json(causes);
        }
        catch (err) {
            console.error("Error in getCauses:", err);
        }
    }
}

module.exports = CauseController;
