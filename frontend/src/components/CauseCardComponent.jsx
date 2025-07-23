import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { useSelector } from "react-redux";
const CauseCardComponent = () => {
  const [editPopup, setEditPopup] = useState(false);
  const [currentCause, setCurrentCause] = useState(null);
  // const [causeName, setCauseName] = useState("");
  // const [placeName, setPlaceName] = useState("");
  // const [causeDescription, setCauseDescription] = useState("");
  // const [
  //   collaborationApplicationDeadline,
  //   setCollaborationApplicationDeadline,
  // ] = useState("");
  // const [time, setTime] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  console.log(error, "error in CauseCardComponent");

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
    } else if (currentCause.causeName.length < 8 || currentCause.causeName.length > 50) {
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
    } else if (currentCause.placeName.length < 2 || currentCause.placeName.length > 25) {
      setError(
        "Place Name should be at least 2 characters long and maximum 25 characters long"
      );
      return false;
    } else if (!/^[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*$/.test(currentCause.placeName)) {
      setError(
        "Place Name should not contain special characters, numbers except spaces and comma "
      );
      return false;
    } else if (currentCause.causeDescription === "") {
      setError("Cause Description is not supposed to be empty");
      return false;
    } else if (currentCause.causeDescription.length < 10 || currentCause.causeDescription.length > 200) {
      setError(
        "Cause Description should be at least 10 characters long and maximum 200 characters long"
      );
      return false;
    } else if (!/^[A-Za-z0-9.,!?'"()&%\- ]+$/.test(currentCause.causeDescription)) {
      setError("Invalid Cause Description");
      return false;
    } else if (currentCause.collaborationApplicationDeadline === "") {
      setError("Collaboration Deadline is not supposed to be empty");
      return false;
    } else if (currentCause.collaborationApplicationDeadline < formattedCurrentDate) {
      setError("Application Deadline cannot be in the past");
      return false;
    } else if (currentCause.time === "") {
      setError("Time is not supposed to be empty");
      return false;
    } else if(userInputTotalMinutes < currentTotalMinutes){
      setError("Time cannot be in the past");
      return false
    }
    else if (currentCause.startDate === "") {
      setError("Start Date is not supposed to be empty");
      return false;
    } else if (currentCause.startDate < formattedCurrentDate) {
      setError("Start Date cannot be in the past");
      return false;
    } else if (currentCause.startDate < currentCause.collaborationApplicationDeadline) {
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


  const { loading, myerror, success, myCauses } = useSelector(
    (state) => state.cause
  );

  const handleEditClick = (cause) => () => {
    setEditPopup(true);
    setCurrentCause(cause);
  };


  
const {id} = useSelector((state) => state.userLogin.userInfo);

  const handleUpdate = (causeId) => (e) => {
    console.log(causeId, currentCause, "causeId and current cause");
    e.preventDefault();
        if (validateUpdateForm()) {
          
        }
  };

  return (
    <>
      {myCauses?.data !== null ? (
        myCauses?.data?.map((cause, index) => (
          <div key={index}>
            <div className="bg-custom_gradient text-gray-50 border p-8 mb-4 rounded-md shadow">
              <div className="flex justify-between">
                <p className="text-xl font-medium tracking-wider">
                  {cause.causeName}
                </p>
                <button
                  className="hover:underline text-lg ml-28 tracking-wider"
                  onClick={handleEditClick(cause)}
                >
                  Edit
                </button>
              </div>
              <div className="flex mt-4">
                <span>{cause.startDate.split("T")[0]}</span>
                <span className="ml-4">{cause.placeName}</span>
              </div>
            </div>
            {editPopup ? (
              <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
                <div className="rounded-md shadow p-6 border bg-white w-[30%]">
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
                        onChange={(e) => setCurrentCause({ ...currentCause, causeName: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Please Enter Place Name"
                        className="px-4 py-2 border"
                        value={currentCause?.placeName}
                        onChange={(e) => setCurrentCause({ ...currentCause, placeName: e.target.value })}
                      />
                      <textarea
                        placeholder="Please Enter Cause Description"
                        rows="3"
                        cols="50"
                        className="px-4 py-2 border"
                        value={currentCause?.causeDescription}
                        onChange={(e) => setCurrentCause({ ...currentCause, causeDescription: e.target.value })}
                      />
                      <input
                        type="date"
                        placeholder="Please Enter Deadline For Collaboration"
                        className="px-4 py-2 border"
                        value={currentCause?.collaborationApplicationDeadline}
                        onChange={(e) =>
                          setCurrentCause({ ...currentCause, collaborationApplicationDeadline: e.target.value })
                        }
                      />
                      <input
                        type="time"
                        className="px-4 py-2 border"
                        value={currentCause?.time}
                        onChange={(e) => setCurrentCause({ ...currentCause, time: e.target.value })}
                      />
                      <label htmlFor="">Start Date:</label>
                      <input
                        type="date"
                        placeholder="Please Enter Start Date"
                        className="px-4 py-2 border"
                        value={currentCause?.startDate?.slice(0, 10)}
                        onChange={(e) => setCurrentCause({ ...currentCause, startDate: e.target.value })}
                      />
                      <label htmlFor="">End Date:</label>
                      <input
                        type="date"
                        placeholder="Please Enter End Date"
                        className="px-4 py-2 border"
                        value={currentCause?.endDate?.slice(0, 10)}
                        onChange={(e) => setCurrentCause({ ...currentCause, endDate: e.target.value })}
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
          </div>
        ))
      ) : (
        <p className="text-red-500">No causes till now!</p>
      )}
    </>
  );
};

export default CauseCardComponent;
