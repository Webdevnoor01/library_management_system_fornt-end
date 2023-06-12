import React from "react";

// MUI-icons
import EditCalendarSharpIcon from "@mui/icons-material/EditCalendarSharp";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
const ActionEdit = ({ handleClick }) => {
  return (
    <span className="action-edit" onClick={handleClick} title="Edit">
      {" "}
      <DriveFileRenameOutlineSharpIcon className="action-edit__icon" />{" "}
    </span>
  );
};

export default ActionEdit;
