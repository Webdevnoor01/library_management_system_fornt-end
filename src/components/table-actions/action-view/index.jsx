/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";

const ActionView = ({ to }) => {
  return (
    <Link className="action-view" to={to} title="Open">
      {" "}
      <VisibilitySharpIcon className="action-view__icon" />{" "}
    </Link>
  );
};

export default ActionView;
