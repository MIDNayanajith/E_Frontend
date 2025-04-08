import "./header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* logo */}
      <Logo />
      {/* searchbar */}
      <Searchbar />
      {/* nav */}
      <Nav />
    </header>
  );
};

export default Header;
