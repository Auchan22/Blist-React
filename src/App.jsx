import { Routes, Route } from "react-router-dom";

import PageHome from "./Pages/PageHome";
import PageError from "./Pages/PageError";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<PageHome />} path="/" />
        <Route element={<PageError />} path="*" />
      </Routes>
    </Layout>
  );
}

export default App;
