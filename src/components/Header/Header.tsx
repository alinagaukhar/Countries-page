import "./Header.scss";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { useThemeContext } from "../../contexts/themeContext";

const Header = (props: any) => {
  const theme = useThemeContext();

  const swicthTheme = () => {
    if (theme === "dark") props.setTheme("light");
    else props.setTheme("dark");
    console.log(theme);
  };
  return (
    <header className={theme === "dark" ? "header-dark" : "header-light"}>
      <h1>Where in the world?</h1>
      <button onClick={swicthTheme}>
        {theme === "dark" ? (
          <HiMoon className="img" />
        ) : (
          <HiOutlineMoon className="img" />
        )}
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
