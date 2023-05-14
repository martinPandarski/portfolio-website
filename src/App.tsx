import "./App.scss";
import Header from "./components/Header/Header";
import image1 from "./assets/crystal_one.png";
import image2 from "./assets/crystal_two.png";
import { useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home-section");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = Array.from(
        contentRef.current?.children || []
      ) as HTMLElement[];
      const currentSection = sectionElements.find((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= 0 && bottom > 0;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="content-wrapper" ref={contentRef}>
      <div id="home-section">
        <div className="left">
          <Header activeSection={activeSection} />
          <div className="intro-text">
            My name is Martin, <br />I am a Frontend Developer
          </div>
          <div className="specialities">
            <div className="speciality">Web frontend development</div>
            <div className="speciality">Android/iOS development</div>
          </div>
        </div>
        <div className="right">
          <img src={image1} />
        </div>
      </div>
      <div id="about-section">
        <div className="title">About Me</div>
        <div className="content">
          <div className="text">
            Hi there! My name is Shallom, and I am a highly creative and driven
            product designer with a passion for designing innovative and
            user-friendly products. With over 5 years of experience in the
            industry, I have developed a unique skill set that allows me to turn
            complex concepts into intuitive and beautiful designs that people
            love to use.
            <br />
            <br />
            I have a strong background in Graphics design, and I always stay up
            to date with the latest design trends and technology. My design
            philosophy is centered around empathy and understanding the needs of
            the end-user, and I take a user-centered approach to all my projects
            to ensure that every design solves real-world problems and meets the
            needs of the target audience.
            <br />
            <br />
            Throughout my career, I have worked with a diverse range of clients,
            from startups to Tech companies, and I have consistently delivered
            high-quality designs that have exceeded their expectations. I have a
            knack for communicating complex ideas to stakeholders, and I am
            skilled at managing the design process from start to finish,
            including conducting user research, prototyping, and testing.
            <br />
            <br />
            When I'm not designing, you can find me exploring the latest design
            tools and techniques, or volunteering at local design events. I am
            always eager to learn and grow as a designer, and I am committed to
            staying at the forefront of the industry. If you're looking for a
            talented and driven product designer to bring your ideas to life, I
            would love the opportunity to work with you. Let's create something
            great together!
          </div>
          <img src={image2} />
        </div>
      </div>
    </div>
  );
}

export default App;
