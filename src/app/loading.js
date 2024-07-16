import { dbConnect } from "@/lib/mongo";
import React from "react";

const Loading = async () => {
  await dbConnect();
  return (
    <div>
      <div className="flex flex-row justify-center align-middle my-36">
        <span class="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
