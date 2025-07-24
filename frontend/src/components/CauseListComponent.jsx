import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCausesByUserId } from "../features/causes/causeSlice";
import CauseCardComponent from "./CauseCardComponent";

export default function CauseListComponent() {

  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.userLogin.userInfo);


  useEffect(() => {
    dispatch(getCausesByUserId(id));
  }, []);


  return (
    <div className="flex flex-wrap gap-6">
      <CauseCardComponent />
      </div>
  );
}
