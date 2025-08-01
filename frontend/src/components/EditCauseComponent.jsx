import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { updateCauseById } from "../features/causes/causeSlice";

export default function EditCauseComponent({
  editPopupStatus,
  currentCause,
  setCurrentCause,
  setEditPopup,
}) {
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const currentDate = new Date();
  console.log("Current Date:", currentDate);
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  console.log("Formatted Current Date:", formattedCurrentDate);

  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTotalMinutes = currentHours * 60 + currentMinutes;

  const userInputTime = currentCause?.time;
  const userInputHours = parseInt(userInputTime?.split(":")[0]);
  const userInputMinutes = parseInt(userInputTime?.split(":")[1]);
  const userInputTotalMinutes = userInputHours * 60 + userInputMinutes;

  console.log("Current Time:", currentTime);
  console.log("User Input Time", currentCause?.time);

  const validateUpdateForm = () => {
    if (currentCause.causeName === "") {
      setError("Cause Name is not supposed to be empty");
      return false;
    } else if (
      currentCause.causeName.length < 8 ||
      currentCause.causeName.length > 50
    ) {
      setError(
        "Cause Name should be at least 8 characters long and maximum 50 characters long"
      );
      return false;
    } else if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(currentCause.causeName)) {
      setError(
        "Cause Name should not contain special characters, numbers except space and comma "
      );
      return false;
    } else if (currentCause.placeName === "") {
      setError("Place Name is not supposed to be empty");
      return false;
    } else if (
      currentCause.placeName.length < 2 ||
      currentCause.placeName.length > 25
    ) {
      setError(
        "Place Name should be at least 2 characters long and maximum 25 characters long"
      );
      return false;
    } else if (
      !/^[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*$/.test(currentCause.placeName)
    ) {
      setError(
        "Place Name should not contain special characters, numbers except spaces and comma "
      );
      return false;
    } else if (currentCause.causeDescription === "") {
      setError("Cause Description is not supposed to be empty");
      return false;
    } else if (
      currentCause.causeDescription.length < 10 ||
      currentCause.causeDescription.length > 200
    ) {
      setError(
        "Cause Description should be at least 10 characters long and maximum 200 characters long"
      );
      return false;
    } else if (
      !/^[A-Za-z0-9.,!?'"()&%\- ]+$/.test(currentCause.causeDescription)
    ) {
      setError("Invalid Cause Description");
      return false;
    } else if (currentCause.helpingHands === "") {
      setError("Number of Helping Hands is not supposed to be empty");
      return false;
    } else if (!/^(?:[1-9]|1\d|2[0-5])$/.test(currentCause.helpingHands)) {
      setError("Invalid Number of Helping Hands");
      return false;
    } else if (
      currentCause.helpingHands < 1 ||
      currentCause.helpingHands > 25
    ) {
      setError("Number of Helping Hands should be between 1 and 25");
      return false;
    } else if (currentCause.collaborationApplicationDeadline === "") {
      setError("Collaboration Deadline is not supposed to be empty");
      return false;
    } else if (
      currentCause.collaborationApplicationDeadline < formattedCurrentDate
    ) {
      setError("Application Deadline cannot be in the past");
      return false;
    } else if (currentCause.time === "") {
      setError("Time is not supposed to be empty");
      return false;
    } else if (userInputTotalMinutes < currentTotalMinutes) {
      setError("Time cannot be in the past");
      return false;
    } else if (currentCause.startDate === "") {
      setError("Start Date is not supposed to be empty");
      return false;
    } else if (currentCause.startDate < formattedCurrentDate) {
      setError("Start Date cannot be in the past");
      return false;
    } else if (
      currentCause.startDate < currentCause.collaborationApplicationDeadline
    ) {
      setError(
        "Start Date cannot be before the Application for collaboration Deadline"
      );
      return false;
    } else if (currentCause.endDate === "") {
      setError("End Date is not supposed to be empty");
      return false;
    } else if (currentCause.endDate < currentCause.startDate) {
      setError("End Date cannot be before Start Date");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleUpdate = (causeId) => (e) => {
    e.preventDefault();
    if (validateUpdateForm()) {
      dispatch(
        updateCauseById({ causeId: causeId, causeData: currentCause })
      ).then((response) => {
        if (response.payload.success) {
          setEditPopup(false);
          toast.success(response.payload.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            border: "1px solid black",
          });
        } else {
          toast.error(response.payload.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            border: "1px solid black",
          });
        }
      });
    }
  };

  return (
    <>
      {editPopupStatus ? (
        <div className="edit-popup fixed top-0 left-0 h-full w-full flex justify-center items-center">
          <div className="rounded-md shadow p-6 border bg-white w-[30%] max-h-[90vh] overflow-y-scroll scrollbar-hide">
            <div className="flex justify-between mb-6">
              <div></div>
              <RxCross1 onClick={() => setEditPopup(false)} />
            </div>
            <div>
              <form
                action=""
                className="flex flex-col gap-4"
                onSubmit={handleUpdate(currentCause?._id)}
              >
                {error ? <p className="text-red-600">{error}</p> : ""}
                <input
                  type="text"
                  placeholder="Please Enter Cause Name"
                  className="px-4 py-2 border"
                  value={currentCause?.causeName}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      causeName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Please Enter Place Name"
                  className="px-4 py-2 border"
                  value={currentCause?.placeName}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      placeName: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Please Enter Cause Description"
                  rows="3"
                  cols="50"
                  className="px-4 py-2 border"
                  value={currentCause?.causeDescription}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      causeDescription: e.target.value,
                    })
                  }
                />
                <label htmlFor="needed-hands">Helping Hands:</label>
                <input
                  type="text"
                  placeholder="Type number of collabs needed"
                  className="px-4 py-2 border"
                  value={currentCause?.helpingHands}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      helpingHands: e.target.value,
                    })
                  }
                />
                <input
                  type="date"
                  placeholder="Please Enter Deadline For Collaboration"
                  className="px-4 py-2 border"
                  value={currentCause?.collaborationApplicationDeadline}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      collaborationApplicationDeadline: e.target.value,
                    })
                  }
                />
                <input
                  type="time"
                  className="px-4 py-2 border"
                  value={currentCause?.time}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      time: e.target.value,
                    })
                  }
                />
                <label htmlFor="">Start Date:</label>
                <input
                  type="date"
                  placeholder="Please Enter Start Date"
                  className="px-4 py-2 border"
                  value={currentCause?.startDate?.slice(0, 10)}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      startDate: e.target.value,
                    })
                  }
                />
                <label htmlFor="">End Date:</label>
                <input
                  type="date"
                  placeholder="Please Enter End Date"
                  className="px-4 py-2 border"
                  value={currentCause?.endDate?.slice(0, 10)}
                  onChange={(e) =>
                    setCurrentCause({
                      ...currentCause,
                      endDate: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="bg-custom_blue text-white py-2 mt-4"
                >
                  Update Cause
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
