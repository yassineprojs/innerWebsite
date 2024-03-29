import { useState } from "react";
import OpenSequence from "./components/openingSequence";
import LoginPassword from "./components/LoginPassword";
import Ceaser from "./components/Ceaser"; // Ensure you import the Ceaser component

function App() {
  const [open, setOpen] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  return (
    <div className="App">
      {!passwordValidation && ( // Render these components only if passwordValidation is false
        <>
          <OpenSequence setOpen={setOpen} />
          <LoginPassword
            open={open}
            onValidation={() => setPasswordValidation(true)}
          />
        </>
      )}
      {passwordValidation && <Ceaser />} // Render Ceaser component only if
      passwordValidation is true
    </div>
  );
}

export default App;
