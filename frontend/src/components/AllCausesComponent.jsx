import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCauses } from "../features/causes/causeSlice";

export default function AllCausesComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCauses());
  }, []);

  const { loading, myerror, success, allCauses } = useSelector(
    (state) => state.cause
  );

  return (
    <div className="mt-9 mb-28">
      <h3 className="text-2xl font-semibold mt-4 mb-6 tracking-wider">
        All Causes
      </h3>
      <div className="flex gap-6">
        {allCauses?.data?.map((cause, index) => (
          <div key={index} className="border p-6 mb-4 shadow rounded-md">
            <p className="text-xl font-medium tracking-wider">
              {cause.causeName}
            </p>
            <div className="flex mt-4 mb-2">
              <span>{cause.startDate.split("T")[0]}</span>
              <span className="ml-4">{cause.placeName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
