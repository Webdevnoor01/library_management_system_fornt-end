/* eslint-disable react/jsx-key */
import { useState } from "react";
// MUI Icons
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import { Link } from "react-router-dom";

// Components
import Table from "../../components/table";
import ActionView from "../../components/table-actions/action-view";
import ActionEdit from "../../components/table-actions/action-edit";
import ActionDelete from "../../components/table-actions/action-delete";
import Select from "../../components/shared/select";
import InputGroup from "../../components/shared/input-group";
import Pagination from "../../components/shared/pagination";
import Button from "../../components/ui/button";

const LibraryCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);
  const tableOptions = {
    thead: [
      "Library Id",
      "User Name",
      "Book Limit",
      "Book Cound",
      "Branch",
      "Issue Date",
      "Expire Date",
      "Actions",
    ],
    tbody: [
      [
        "CST_01",
        "Abdun Noor Faruki Biswas",
        "4",
        1,
        "CST",
        `${new Date().toLocaleDateString("en-GB")}`,
        `${new Date(Date.now() + 1000 * 60 * 60 * 24 * 995).toLocaleDateString(
          "en-GB"
        )}`,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "CST_02",
        "Mohasin Raja",
        "4",
        3,
        "CST",
        `${`${new Date().toLocaleDateString("en-GB")}`}`,
        `${new Date(Date.now() + 1000 * 60 * 60 * 24 * 995).toLocaleDateString(
          "en-GB"
        )}`,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "CST_03",
        "Jesmina Khatun",
        "4",
        4,
        "CST",
        `${`${new Date().toLocaleDateString("en-GB")}`}`,
        `${new Date(Date.now() + 1000 * 60 * 60 * 24 * 995).toLocaleDateString(
          "en-GB"
        )}`,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "CST_04",
        "Koyel Rana Mondal",
        "4",
        2,
        "CST",
        `${`${new Date().toLocaleDateString("en-GB")}`}`,
        `${new Date(Date.now() + 1000 * 60 * 60 * 24 * 995).toLocaleDateString(
          "en-GB"
        )}`,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "CST_05",
        "Rabiul Sk",
        "4",
        0,
        "CST",
        `${`${new Date().toLocaleDateString("en-GB")}`}`,
        `${new Date(
          Date.now("en-GB") + 1000 * 60 * 60 * 24 * 995
        ).toLocaleDateString("en-GB")}`,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
    ],
  };
  const selectOptions = [
    {
      value: 5,
      text: 5,
    },
    {
      value: 10,
      text: 10,
    },
    {
      value: 20,
      text: 20,
    },
  ];
  const libraryCardRoleSelectOption = [
    {
      value: "",
      text: "Select User Role",
    },
    {
      value: "Teacher",
      text: "Teacher",
    },
    {
      value: "Student",
      text: "Student",
    },
  ];
  const libraryCardBranchSelectOption = [
    {
      value: "",
      text: "Select User Branch",
    },
    {
      value: "CST",
      text: "CST",
    },
    {
      value: "ME",
      text: "ME",
    },
    {
      value: "CE",
      text: "CE",
    },
    {
      value: "EE",
      text: "EE",
    },
  ];
  return (
    <div className="libraryCard">
      <section className="libraryCard__breadcrumb">
        <span className="libraryCard__breadcrumb-item">
          {" "}
          <Link to={"/admin/dashboard"}>Dashboard</Link>{" "}
        </span>
        <span className="libraryCard__breadcrumb-item">
          <ArrowRightSharpIcon className="libraryCard__breadcrumb-icon" />
        </span>
        <span className="libraryCard__breadcrumb-item">
          {" "}
          <Link>Library Card</Link>{" "}
        </span>
      </section>

      <section className="libraryCard__libraryCard-preview">
        <div className="libraryCard__libraryCard-table">
          <div className="libraryCard__header">
            <div className="libraryCard__select">
              <Select
                name="parPage"
                options={selectOptions}
                value={parPage}
                onChange={(e) => setParPage(e.target.value)}
                styles={{
                  marginTop: "0rem ",
                }}
              />
            </div>
            <div className="libraryCard__search">
              <InputGroup name="search" placeHolder={"search..."} type="text" />
            </div>
          </div>
          <Table
            thead={tableOptions.thead}
            tbody={tableOptions.tbody}
            isDashboard={false}
          />
          <div className="libraryCard__pagination">
            <Pagination
              totalItems={50}
              showItem={5}
              parPage={parPage}
              pageNumber={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        <div className="libraryCard__add-card">
          <div className="libraryCard__addCard-heading">
            <h2>Add Library Card</h2>
          </div>
          <form className="libraryCard__form">
            <div className="libraryCard__input-group">
              <div className="libraryCard__first-input">
                <InputGroup
                  name="name"
                  type="text"
                  label="Name"
                  placeHolder={"Jon Doo"}
                  color="#4e4e4e"
                />
              </div>
              <div className="libraryCard__second-input">
                <InputGroup
                  name="libraryId"
                  type="text"
                  label="Library Id"
                  placeHolder={"BranchName__001"}
                  color="#4e4e4e"
                />
              </div>
            </div>

            <div className="libraryCard__single-input">
              <Select
                name="catagory"
                options={libraryCardRoleSelectOption}
                styles={{
                  width: "100%",
                  marginTop: "0rem",
                }}
              />
            </div>
            <div className="libraryCard__single-input">
              <Select
                name="catagory"
                options={libraryCardBranchSelectOption}
                styles={{
                  width: "100%",
                  marginTop: "0rem",
                }}
              />
            </div>

            <div className="libraryCard__btn-group">
              <Button type="submit" text={"Add Card"} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LibraryCard;
