import instagram from "../assets/instagram.png";
const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagram} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="seacrch" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home" />
        </button>
        <button>
          <i className="fas fa-comment-alt" />
        </button>
        <button>
          <i className="fas fa-compass" />
        </button>
        <button>
          <i className="fas fa-heart" />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
