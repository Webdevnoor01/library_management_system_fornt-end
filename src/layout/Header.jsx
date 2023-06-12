// MUI Icons
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__toggle">
          <MenuSharpIcon className="header__menu" />
        </div>
      </div>
      <div className="header__center">
        <input
          className="header__search"
          type="text"
          placeholder="Search..."
          name="search"
        />
      </div>
      <div className="header__right">
        <div className="header__user-info">
          <div className="header__user-name">Abdun Noor</div>
          <span className="header__user-role">Admin</span>
        </div>
        <img
          src="../images/user_admin_logo.png"
          alt="user logo"
          className="header__user-logo"
        />
      </div>
    </header>
  );
};

export default Header;
