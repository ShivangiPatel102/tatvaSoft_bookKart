import { React, useState } from "react";
// import "./App.css"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";


function App() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setHasAccount={setHasAccount} />
        <Routes>
          <Route exact path="/" element={<Home hasAccount={hasAccount} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
