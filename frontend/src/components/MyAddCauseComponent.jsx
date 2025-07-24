import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCause } from "../features/causes/causeSlice";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import CauseListComponent from "./CauseListComponent";

export default function MyAddCauseComponent() {
  const [addCausePopup, setAddCausePopup] = useState(false);
  const [causeName, setCauseName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [causeDescription, setCauseDescription] = useState("");
  const [
    collaborationApplicationDeadline,
    setCollaborationApplicationDeadline,
  ] = useState("");
  const [time, setTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [reloadCauseCard, setReloadCauseCard] = useState(false);

  //getting current date
  const currentDate = new Date();
  console.log("Current Date:", currentDate);
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  console.log("Formatted Current Date:", formattedCurrentDate);

  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTotalMinutes = currentHours * 60 + currentMinutes;

  const userInputTime = time;
  const userInputHours = parseInt(userInputTime.split(":")[0]);
  const userInputMinutes = parseInt(userInputTime.split(":")[1]);
  const userInputTotalMinutes = userInputHours * 60 + userInputMinutes;

  console.log("Current Time:", currentTime);
  console.log("User Input Time", time);

  const { id } = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();

  const validateAddForm = () => {
    if (causeName === "") {
      setError("Cause Name is not supposed to be empty");
      return false;
    } else if (causeName.length < 8 || causeName.length > 50) {
      setError(
        "Cause Name should be at least 8 characters long and maximum 50 characters long"
      );
      return false;
    } else if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(causeName)) {
      setError(
        "Cause Name should not contain special characters, numbers except space and comma "
      );
      return false;
    } else if (placeName === "") {
      setError("Place Name is not supposed to be empty");
      return false;
    } else if (placeName.length < 2 || placeName.length > 25) {
      setError(
        "Place Name should be at least 2 characters long and maximum 25 characters long"
      );
      return false;
    } else if (!/^[A-Za-z]+(?:\s*,\s*[A-Za-z]+)*$/.test(placeName)) {
      setError(
        "Place Name should not contain special characters, numbers except spaces and comma "
      );
      return false;
    } else if (causeDescription === "") {
      setError("Cause Description is not supposed to be empty");
      return false;
    } else if (causeDescription.length < 10 || causeDescription.length > 200) {
      setError(
        "Cause Description should be at least 10 characters long and maximum 200 characters long"
      );
      return false;
    } else if (!/^[A-Za-z0-9.,!?'"()&%\- ]+$/.test(causeDescription)) {
      setError("Invalid Cause Description");
      return false;
    } else if (collaborationApplicationDeadline === "") {
      setError("Collaboration Deadline is not supposed to be empty");
      return false;
    } else if (collaborationApplicationDeadline < formattedCurrentDate) {
      setError("Application Deadline cannot be in the past");
      return false;
    } else if (time === "") {
      setError("Time is not supposed to be empty");
      return false;
    } else if (userInputTotalMinutes < currentTotalMinutes) {
      setError("Time cannot be in the past");
      return false;
    } else if (startDate === "") {
      setError("Start Date is not supposed to be empty");
      return false;
    } else if (startDate < formattedCurrentDate) {
      setError("Start Date cannot be in the past");
      return false;
    } else if (startDate < collaborationApplicationDeadline) {
      setError(
        "Start Date cannot be before the Application for collaboration Deadline"
      );
      return false;
    } else if (endDate === "") {
      setError("End Date is not supposed to be empty");
      return false;
    } else if (endDate < startDate) {
      setError("End Date cannot be before Start Date");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleAddCause = (e) => {
    e.preventDefault();
    if (validateAddForm()) {
      dispatch(
        addCause({
          causeName,
          placeName,
          causeDescription,
          collaborationApplicationDeadline,
          time,
          startDate,
          endDate,
          userId: id,
        })
      ).then((response) => {
        if (response.payload.success) {
          setReloadCauseCard(!reloadCauseCard);
          setAddCausePopup(false);
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
    <div>
      <div className="flex relative">
        <h3 className="text-2xl font-semibold mt-12 mb-6 tracking-wider">
          My Causes
        </h3>

        <button
          className="bg-custom_blue text-white px-4 py-2 rounded-md absolute right-0 top-[40%]"
          onClick={() => setAddCausePopup(true)}
        >
          + Add New Cause
        </button>
        {addCausePopup ? (
          <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
            <div className="rounded-md shadow p-6 border bg-white w-[30%]">
              <div className="flex justify-between mb-6">
                <div></div>
                <RxCross1 onClick={() => setAddCausePopup(false)} />
              </div>
              <div>
                <form
                  action=""
                  className="flex flex-col gap-4"
                  onSubmit={handleAddCause}
                >
                  {error ? <p className="text-red-600">{error}</p> : ""}
                  <input
                    type="text"
                    placeholder="Please Enter Cause Name"
                    className="px-4 py-2 border"
                    onChange={(e) => setCauseName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Please Enter Place Name"
                    className="px-4 py-2 border"
                    onChange={(e) => setPlaceName(e.target.value)}
                  />
                  <textarea
                    type="text"
                    rows="3"
                    cols="40"
                    placeholder="Please Enter Cause Description"
                    className="px-4 py-2 border"
                    onChange={(e) => setCauseDescription(e.target.value)}
                  />
                  <label htmlFor="">Application Deadline:</label>
                  <input
                    type="date"
                    placeholder="Please Enter Deadline For Collaboration"
                    className="px-4 py-2 border"
                    onChange={(e) =>
                      setCollaborationApplicationDeadline(e.target.value)
                    }
                  />
                  <input
                    type="time"
                    className="px-4 py-2 border"
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <label htmlFor="">Start Date:</label>
                  <input
                    type="date"
                    placeholder="Please Enter Start Date"
                    className="px-4 py-2 border"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <label htmlFor="">End Date:</label>
                  <input
                    type="date"
                    placeholder="Please Enter End Date"
                    className="px-4 py-2 border"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-custom_blue text-white py-2 mt-4"
                  >
                    Add Cause
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <CauseListComponent />
    </div>
  );
}
