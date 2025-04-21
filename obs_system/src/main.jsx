import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import NoteList from "../views/Note-List.jsx";
import Signin from "../views/Signin.jsx";
import Signup from "../views/Signup.jsx";
import Home from "../views/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseRegister from "../views/CourseRegister.jsx";
import PeriodAvg from "../views/Period-avg.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="note-list" element={<NoteList />} />
          <Route path="course-register" element={<CourseRegister />} />
          <Route path="period-averages" element={<PeriodAvg />} />
        </Route>
        
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
