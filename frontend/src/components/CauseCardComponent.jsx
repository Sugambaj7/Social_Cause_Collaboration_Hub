import React, { useState } from "react";
import { useSelector } from "react-redux";

import DeleteCauseComponent from "./DeleteCauseComponent";
import EditCauseComponent from "./EditCauseComponent";

const CauseCardComponent = () => {
  const [editPopup, setEditPopup] = useState(false);
  const [currentCause, setCurrentCause] = useState(null);

  const { loading, myerror, success, myCauses } = useSelector(
    (state) => state.cause
  );

  const handleEditClick = (cause) => () => {
    setEditPopup(true);
    setCurrentCause(cause);
  };

  return (
    <>
      {myCauses.length !== 0 ? (
        myCauses?.map((cause, index) => (
          <div className="cause-card" key={index}>
            <div className="bg-custom_gradient text-gray-50 border p-8 mb-4 rounded-md shadow">
              <div className="flex justify-between gap-4">
                <p className="text-xl font-medium tracking-wider">
                  {cause.causeName}
                </p>
         
                <button
                  className="hover:underline text-lg ml-28 tracking-wider"
                  onClick={handleEditClick(cause)}
                >
                  Edit
                </button>
                <DeleteCauseComponent causeId={cause._id} />
              </div>
              <div className="flex mt-4">
                <span>{cause.startDate.split("T")[0]}</span>
                <span className="ml-4">{cause.placeName}</span>
              </div>
            </div>

            <EditCauseComponent
              editPopupStatus={editPopup}
              currentCause={currentCause}
              setCurrentCause={setCurrentCause}
              setEditPopup={setEditPopup}
            />
          </div>
        ))
      ) : (
        <div>
          <p className="text-red-500">No causes till now!</p>
        </div>
      )}
    </>
  );
};

export default CauseCardComponent;
