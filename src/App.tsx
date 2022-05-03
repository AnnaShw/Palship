import React, { useState } from "react";
//import Custom components
import SignInUpPage from "./SignInUpPage/SignInUpPage";
import NavBar from "./NavBar/NavBar";
//import css
import "./App.css";

function App() {
  const [logedIn, setLogedIn] = useState<boolean>(false);

  return (
    <div className="App">
      {logedIn && (
        <React.Fragment>
          <header className="App-header">
            <NavBar />
          </header>
        </React.Fragment>
      )}
      {!logedIn && (
        <main className="Stranger">
          <SignInUpPage />
        </main>
      )}
      <footer></footer>
    </div>
  );
}

export default App;
