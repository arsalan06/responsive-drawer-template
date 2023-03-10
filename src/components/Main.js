import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import Layout from "./layout/Layout";

const Main = () => {
  const [activelink, setActiveLink] = useState("/");

  const handleActiveLink = (to) => {
    setActiveLink(to);
  };

  const location = useLocation();

  useEffect(() => {
    // execute on location change
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <Layout handleActiveLink={handleActiveLink} activelink={activelink}>
        <AppRoutes />
      </Layout>
    </>
  );
};

export default Main;

////Code to handle scrollong using refs!
// const handleScroll = () => {
//   const firstSectionTop = firstSectionRef.current.getBoundingClientRect().top;
//   const secondSectionTop =
//     secondSectionRef.current.getBoundingClientRect().top;
//   const thirdSectionTop = thirdSectionRef.current.getBoundingClientRect().top;

//   if (firstSectionTop >= 0 && firstSectionTop <= window.innerHeight) {
//     setActiveLink(`#${firstSectionRef.current.id}`);
//   } else if (
//     secondSectionTop >= 0 &&
//     secondSectionTop <= window.innerHeight
//   ) {
//     setActiveLink(`#${secondSectionRef.current.id}`);
//   } else if (thirdSectionTop >= 0 && thirdSectionTop <= window.innerHeight) {
//     setActiveLink(`#${thirdSectionRef.current.id}`);
//   }
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const scrollToSection = (id, ref) => {
//   setActiveLink(id);
//   ref.current.scrollIntoView({ behavior: "smooth" });
// };
