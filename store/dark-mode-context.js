import { createContext, useState } from "react";

const ModeContext = createContext({
  mode: "light",
  setMode: function (mode) {},
});

export function ModeContextProvider(props) {
  const [mode, setMode] = useState("light");

  function setModeHandler() {
    // console.log("yup", mode);
    setMode(mode === "light" ? "dark" : "light");
  }

  const context = {
    mode: mode,
    setMode: setModeHandler,
  };

  return (
    <ModeContext.Provider value={context}>
      {props.children}
    </ModeContext.Provider>
  );
}

export default ModeContext;
