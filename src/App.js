import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./Contexts/UserContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from './Pages/Home';
import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
