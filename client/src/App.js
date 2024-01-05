import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/Layout";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { LayoutLog } from "./component/LayoutLog";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/loggedin" element={<LayoutLog />}>
        <Route index element={<IndexPage />} />
        <Route path="/loggedin/createpost" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App;
