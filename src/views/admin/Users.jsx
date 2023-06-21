/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";

import Select from "../../components/shared/select";
import InputGroup from "../../components/shared/input-group";
import Table from "../../components/table";
import Pagination from "../../components/shared/pagination";
import ActionView from "../../components/table-actions/action-view"
import ActionEdit from "../../components/table-actions/action-edit"
import ActionDelete from "../../components/table-actions/action-delete"

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);

  const tableOptions = {
    thead: [
      "Library Id",
      "Name",
      "Branch",
      "Role",
      "Books",
      "Fine",
      "Image",
      "Actions",
    ],
    tbody: [
      [
        "cst_012",
        "Abdun Noor",
        "CST",
        "Student",
        3,
        150,
        <span className="tableContainer__image-user">
          <img src="../../images/user_admin_logo.png" alt="book image" />
        </span>,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "cst_012",
        "Abdun Noor",
        "CST",
        "Student",
        3,
        150,
        <span className="tableContainer__image-user">
          <img src="../../images/user_admin_logo.png" alt="book image" />
        </span>,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "cst_012",
        "Abdun Noor",
        "CST",
        "Student",
        3,
        150,
        <span className="tableContainer__image-user">
          <img src="../../images/user_admin_logo.png" alt="book image" />
        </span>,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "cst_012",
        "Abdun Noor",
        "CST",
        "Student",
        3,
        150,
        <span className="tableContainer__image-user">
          <img src="../../images/user_admin_logo.png" alt="book image" />
        </span>,
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

  return (
    <div className="users">
      <section className="books__breadcrumb">
        <span className="books__breadcrumb-item">
          {" "}
          <Link to={"/admin/dashboard"}>Dashboard</Link>{" "}
        </span>
        <span className="books__breadcrumb-item">
          <ArrowRightSharpIcon className="books__breadcrumb-icon" />
        </span>
        <span className="books__breadcrumb-item">
          {" "}
          <Link>Return Request</Link>{" "}
        </span>
      </section>
      <section className="users__books-preview">
        <div className="users__book-table">
          <div className="users__header">
            <div className="users__select">
              <Select
                name="parPage"
                options={selectOptions}
                styles={{
                  marginTop: "0rem ",
                }}
              />
            </div>
            <div className="users__search">
              <InputGroup name="search" placeHolder={"search..."} type="text" />
            </div>
          </div>
          <Table
            thead={tableOptions.thead}
            tbody={tableOptions.tbody}
            isDashboard={false}
          />
          <div className="users__pagination">
            <Pagination
              totalItems={50}
              showItem={5}
              parPage={parPage}
              pageNumber={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;
