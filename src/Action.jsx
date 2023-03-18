import React from "react";
import { Toastify } from "./Toastify";

const Action = () => {
  let State = true;

  return (
    <div>
      {State === true ? (
        <Toastify message="This is successful message" type="success" />
      ) : (
        <Toastify message="This is error message" type="warning" />
      )}
      {State === true ? (
        <Toastify message="This is hamza message" type="success" />
      ) : (
        <Toastify message="This is error message" type="warning" />
      )}
    </div>
  );
};

export default Action;
