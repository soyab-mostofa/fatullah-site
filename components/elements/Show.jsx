import React from "react";

const Show = ({ show, children }) => {
  return <>{show && children}</>;
};

export default Show;
