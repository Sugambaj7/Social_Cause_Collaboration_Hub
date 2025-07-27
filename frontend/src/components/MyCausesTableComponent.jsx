import React, { useState } from "react";
import { useSelector } from "react-redux";

import DeleteCauseComponent from "./DeleteCauseComponent";
import EditCauseComponent from "./EditCauseComponent";
import { PaginationComponent } from "./PaginationComponent";

const MyCausesTableComponent = () => {
  const [editPopup, setEditPopup] = useState(false);
  const [currentCause, setCurrentCause] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);
  const [causesPerPage, setCausesPerPage] = useState(5);

  const { loading, myerror, success, myCauses } = useSelector(
    (state) => state.cause
  );

  const handleEditClick = (cause) => () => {
    setEditPopup(true);
    setCurrentCause(cause);
  };

 const setCurrentPageNumber = (page) => setCurrentPage(page);

  const lastCauseIndex = currentPage * causesPerPage;
  const firstCauseIndex = lastCauseIndex - causesPerPage;
  const currentPageCauses = myCauses.slice(firstCauseIndex, lastCauseIndex);


  return (
    <div className="causes-table w-[100%]">
      <table className="bg-white-400 border w-full">
        <thead>
          <thead className="border-b">
            <tr>
              <th className="px-6 py-4 w-[5%]">ID</th>
              <th className="px-6 py-4 border-l w-[20%]">Cause Name</th>
              <th className="px-6 py-4 border-l w-[13%]">Place Name</th>
              <th className="px-6 py-4 border-l w-[28%]">Description</th>
              <th className="px-6 py-4 border-l w-[13%]">Start Date</th>
              <th className="px-6 py-4 border-l w-[13%]">End Date</th>
              <th className="px-6 py-4 border-l w-[8%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPageCauses.length !== 0 ? (
              currentPageCauses?.map((cause, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } cursor-pointer`}
                  key={cause._id}
                >
                  <td className="px-6 py-4">{myCauses.indexOf(cause) + 1}</td>
                  <td className="px-6 py-4 border-l">{cause.causeName}</td>
                  <td className="px-6 py-4 border-l">{cause.placeName}</td>
                  <td className="px-6 py-4 border-l">
                    {cause.causeDescription.length > 15
                      ? cause.causeDescription.substring(0, 35) + "..."
                      : cause.causeDescription}
                  </td>
                  <td className="px-6 py-4 border-l">
                    {cause.startDate.split("T")[0]}
                  </td>
                  <td className="px-6 py-4 border-l">
                    {cause.endDate.split("T")[0]}
                  </td>
                  <td className="px-6 py-4 border-l">
                    <ul className="flex">
                      <li>
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                          onClick={handleEditClick(cause)}
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <DeleteCauseComponent causeId={cause._id} />
                      </li>
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-red-500 text-center p-4">
                  No causes till now!
                </td>
              </tr>
            )}
          </tbody>
        </thead>
      </table>
      <PaginationComponent totalCauses={myCauses.length} numOfCausesPerPage={causesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <EditCauseComponent
        editPopupStatus={editPopup}
        currentCause={currentCause}
        setCurrentCause={setCurrentCause}
        setEditPopup={setEditPopup}
      />
    </div>
  );
};

export default MyCausesTableComponent;
