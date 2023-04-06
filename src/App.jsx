import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayouts from "./components/SharedLayouts";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
