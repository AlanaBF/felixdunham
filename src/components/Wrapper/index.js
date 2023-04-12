import React from "react";

//Wrapper component
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;