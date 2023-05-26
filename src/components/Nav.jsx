import instagram from "../assets/instagram.png";
const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagram} alt="logo" />
      </button>
    </nav>
  );
};

export default Nav;
