import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import CreateUser from "./components/Users/Create/CreateUser";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
