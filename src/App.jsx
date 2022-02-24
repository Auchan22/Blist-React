import { Routes, Route } from "react-router-dom";

import PageHome from "./Pages/PageHome";
import PageError from "./Pages/PageError";
import Layout from "./Pages/Layout";
import PageProduct from "./Pages/PageProduct";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact element={<PageHome />} path="/" />
        <Route element={<PageProduct />} path="/products/:productId" />
        <Route element={<PageError />} path="*" />
      </Routes>
    </Layout>
  );
}

export default App;
