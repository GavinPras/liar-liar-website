import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./routes/Footer";
import Hero from "./routes/Hero";
import Navbar from "./routes/Navbar";
import News from "./routes/News";
import Introduction from "./routes/Introduction";
import Story from "./routes/Story";
import Onair from "./routes/Onair";
import Character from "./routes/Character";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/news" element={<News />} />
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/story" element={<Story />}/>
          <Route path="/onair" element={<Onair />}/>
          <Route path="/character" element={<Character />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
