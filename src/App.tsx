import { Toaster } from "react-hot-toast";
import AboutMe from "./components/aboutMe";
import Beginning from "./components/beginning";
import ContactMe from "./components/contactMe";
import { Line } from "./components/line/styled";
import MyProjects from "./components/myProjects";
import MySkill from "./components/mySkills";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Beginning />
      <Line id="about" />
      <AboutMe />
      <Line id="projects" />
      <MyProjects />
      <Line id="skills" />
      <MySkill />
      <Line id="contact" />
      <ContactMe />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
