import { useState, useEffect } from "react";
import OpenSequence from "./components/openingSequence";
import LoginPassword from "./components/LoginPassword";
import Ceaser from "./components/Ceaser";
function App() {
  const [open, setOpen] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  return (
    <>
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
        {passwordValidation && <Ceaser />}
      </div>
    </>
  );
}

export default App;

// const handlePasswordValidation = (isValid) => {
//   if (isValid) {
//     console.log("Access granted");
//   } else {
//     console.log("Access denied");
//   }
// };
