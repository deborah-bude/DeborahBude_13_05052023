import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home/index"
import SignIn from "./pages/SignIn/index";
import User from "./pages/User/index";
import Error404 from "./pages/Error/404";
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="/page-non-trouvee" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
