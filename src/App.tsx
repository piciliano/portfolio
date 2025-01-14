import { Toaster } from "react-hot-toast";

import AboutMe from "./components/aboutMe";
import Beginning from "./components/beginning";
import ContactMe from "./components/contactMe";
import { Line } from "./components/line/styled";
import MyProjects from "./components/myProjects";
import MySkill from "./components/mySkills";
import Navbar from "./components/navbar";
import React from "react";

function App() {
  const sections = [
    { id: "about", Component: AboutMe },
    { id: "projects", Component: MyProjects },
    { id: "skills", Component: MySkill },
    { id: "contact", Component: ContactMe },
  ];

  return (
    <>
      <Navbar />
      <Beginning />
      {sections.map(({ id, Component }) => (
        <React.Fragment key={id}>
          <Line id={id} />
          <Component />
        </React.Fragment>
      ))}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
