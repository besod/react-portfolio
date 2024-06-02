/*'Alert' component is used to display the alert message on the screen for contact page*/

import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      {type !== "danger" && (
        <div
          className={`${
            type === "danger" ? "bg-red-800 rounded-full" : "bg-blue-800 rounded-full"
          } p2 text-indigo-100 leading-none lg:round-full
      flex lg:inline-flex items-center shadow-md lg:shadow-lg`}
          role="alert"
        >
          <p
            className={`${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } flex rounded-full
          uppercase px-2 py-1 font-semibold mr-3 text-xs`}
          >
            {type === "danger" ? "Error" : "Success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Alert;