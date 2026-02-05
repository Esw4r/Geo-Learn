import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Training from "./pages/Training";
import Practice from "./pages/Practice";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";
import { ProgressProvider } from "./context/ProgressContext";

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
