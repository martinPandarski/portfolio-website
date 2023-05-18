import "./Header.scss";

const Header = ({ activeSection }: { activeSection: string }) => {
  const handleButtonClick = (id: string) => {
    const sectionElement = document.getElementById(id);
    sectionElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div className="header">
      <HeaderButton
        id="home-section"
        activeSection={activeSection}
        onClick={handleButtonClick}
        name="Home"
      />
      <HeaderButton
        id="about-section"
        activeSection={activeSection}
        onClick={handleButtonClick}
        name="About"
      />
      <HeaderButton
        id="stack-section"
        activeSection={activeSection}
        onClick={handleButtonClick}
        name="Tech stack"
      />
      <HeaderButton
        id="contact-section"
        activeSection={activeSection}
        onClick={handleButtonClick}
        name="Contact"
      />
    </div>
  );
};

export default Header;

const HeaderButton = ({
  id,
  activeSection,
  onClick,
  name,
}: {
  id: string;
  activeSection: string;
  onClick: (id: string) => void;
  name: string;
}) => {
  const isActive = id === activeSection;
  const buttonClass = isActive ? "active" : "";

  return (
    <a className={buttonClass} onClick={() => onClick(id)}>
      {name}
    </a>
  );
};
