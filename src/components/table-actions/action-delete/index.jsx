import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
const ActionDelete = ({ handleClick }) => {
  return (
    <span className="action-delete" onClick={handleClick} title="delete">
      {" "}
      <DeleteOutlineSharpIcon className="action-delete__icon" />{" "}
    </span>
  );
};

export default ActionDelete;
