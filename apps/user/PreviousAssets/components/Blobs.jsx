import React from "react";
import blobTopLeft from "../assets/left-blob.png";
import blobTopRight from "../assets/right-blob.png";

const Blobs = () => {
  return (
    <div className="mt-20  -z-50 ">
      <div className="blob-top-left w-32 sm:w-40 md:w-48 lg:56 fixed top-0 left-0 z-10">
        <img src={blobTopLeft} alt="" />
      </div>
      <div className="blob-top-right w-36 sm:w-44 md:w-48 lg:w-52 fixed right-0 top-0 z-10">
        <img src={blobTopRight} alt="" />
      </div>
    </div>
  );
};

export default Blobs;
