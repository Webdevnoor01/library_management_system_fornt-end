// MUI Icons
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import KeyboardReturnSharpIcon from "@mui/icons-material/KeyboardReturnSharp";
import CreditScoreSharpIcon from "@mui/icons-material/CreditScoreSharp";

// Components
import MenuItem from "../components/ui/menu-item";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">LibHub</div>
      <section className="sidebar__menu-section">
        <ul className="sidebar__menu">
          <MenuItem
            title={"Dashboard"}
            Icon={DashboardSharpIcon}
            to={"/admin/dashboard"}
          />
          <MenuItem
            title={"Books"}
            Icon={MenuBookSharpIcon}
            to={"/admin/books"}
          />
          <MenuItem
            title={"Requested Books"}
            Icon={LibraryBooksSharpIcon}
            to={"/admin/requested-books"}
          />
          <MenuItem
            title={"Return Request"}
            Icon={KeyboardReturnSharpIcon}
            to={"/admin/return-request"}
          />
          <MenuItem
            title={"Library Cards"}
            Icon={CreditScoreSharpIcon}
            to={"/admin/library-cards"}
          />
          <MenuItem
            title={"Users"}
            Icon={PersonSharpIcon}
            to={"/admin/users"}
          />
        </ul>
      </section>
      <div className="sidebar__footer">
        <p> &copy; 2023 LibHub, All rights Reserved </p>
        <span>
          Built with 💖 by{" "}
          <a href="https://github.com/webdevnoor01">Abdun Noor Faruki Biswas</a>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
