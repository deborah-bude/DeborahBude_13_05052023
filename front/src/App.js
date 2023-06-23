import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home/index"
import SignIn from "./pages/SignIn/index";
import User from "./pages/User/index";
import Error404 from "./pages/Error/404";
import {Provider} from "react-redux";
import {store} from "./redux";
import React from "react";
import {ProtectedRoute} from "./ProtectedRoute";
function App() {

    return (
        <Provider store={store}>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/user" element={
                  <ProtectedRoute>
                      <User />
                  </ProtectedRoute>
              } />
              <Route path="/page-non-trouvee" element={<Error404 />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Provider>
  );
}

export default App;
