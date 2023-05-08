import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
