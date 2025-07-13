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
            if(!causes || causes.length === 0) {
                return res.status(404).json({
                    message: "No causes found!!!"
                });
            }
            res.status(200).json({
                message: "Causes fetched successfully",
                causes
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    }
}

module.exports = CauseController;
