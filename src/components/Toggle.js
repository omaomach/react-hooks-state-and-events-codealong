import React, { useState } from "react";

function Toggle() {

  const [isOn, setState] = useState(false)

  function onOff() {
    setState((isOn) => !isOn)
  }

  const colour = isOn ? "green" : "red"

  console.log(isOn)
  return <button style={{background: colour}} onClick={onOff}>{isOn ? "On" : "Off"}</button>;
}

export default Toggle;
