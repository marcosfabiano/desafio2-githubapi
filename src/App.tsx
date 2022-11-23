import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import HomeMain from "./routes";
import Home from "./routes/Home";
import PerfilSearch from "./routes/PerfilSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="perfilsearch" element={<PerfilSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
