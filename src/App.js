import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter1 from "./Counter1";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/counter" element={<Counter1 />} />
      </Routes>
    </Router>
  );
}

export default App;
