import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstSection />} />
      <Route path="second-section" element={<SecondSection />} />
      <Route path="third-section" element={<ThirdSection />} />
    </Routes>
  );
};

export default AppRoutes;
