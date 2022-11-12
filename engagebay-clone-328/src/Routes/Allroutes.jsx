import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import { UserAuthContextProvider } from "../Context/userAuthContext";
import Home from "../Pages/Home/Home";
import { InlineForm } from "../Pages/InlineForm/InlineForm";
import Login from "../Pages/loginAndSignup/Login";
import Resetpassword from "../Pages/loginAndSignup/Resetpassword";
import Signup from "../Pages/loginAndSignup/Signup";
import { PopupForm } from "../Pages/PopupForm/PopupForm";
import Emailtemplete from "../Pages/Templetes/Emailtemplete";
import Vediotemplete from "../Pages/Templetes/Vediotemplete";
import ProtectedRoute from "./ProtectedRoute";
import { Contact } from "../Pages/Contact";
import {LandingPage } from "../Pages/LandingPage";

const Allroutes = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Resetpassword />} />
          <Route
            path="/inlineform"
            element={
              <ProtectedRoute>
                <InlineForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/popupform"
            element={
              <ProtectedRoute>
                <PopupForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emailtemplate"
            element={
              <ProtectedRoute>
                <Emailtemplete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/videotemplate"
            element={
              <ProtectedRoute>
                <Vediotemplete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
};

export default Allroutes;
