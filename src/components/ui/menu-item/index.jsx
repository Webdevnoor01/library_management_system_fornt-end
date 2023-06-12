import { Link } from "react-router-dom";

const MenuItem = ({ title, Icon, to }) => {
  return (
    <Link to={to} className="sidebar__link">
      <li className="sidebar__menu-item">
        <span className="sidebar__menu-icondiv">
          <Icon className="sidebar__menu-icon" />
        </span>
        <span className="sidebar__menu-title"> {title} </span>
      </li>
    </Link>
  );
};

export default MenuItem;
