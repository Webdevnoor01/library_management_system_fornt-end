/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import Select from "../../components/shared/select";
import InputGroup from "../../components/shared/input-group";
import Table from "../../components/table";
import Pagination from "../../components/shared/pagination";
import Button from "../../components/ui/button";

const ReturnRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);

  const tableOptions = {
    thead: [
      "Book Id",
      "Book Name",
      "Author Name",
      "Book Image",
      "Edition",
      "User Name",
      "Fine",
      "Actions",
    ],
    tbody: [
      [
        "dksje23",
        "Data Structure",
        "Samim Sk",
        <span className="tableContainer__image">
          <img src="../../images/books/ds.png" alt="book image" />
        </span>,
        "6th",
        "Abdun Noor",
        0,
        <span className="tableContainer__actions">
          <Button
            type="button"
            text={"Accept"}
            style={{
              backgroundColor: "#68ba86",
            }}
          />
          <Button
            type="button"
            text={"Decline"}
            style={{
              backgroundColor: "#d01225",
            }}
          />
        </span>,
      ],
      [
        "dksje23",
        "Algorithm",
        "Rabiul Sk",
        <span className="tableContainer__image">
          <img src="../../images/books/algo.jpeg" alt="book image" />
        </span>,
        "6th",
        "Abdun Noor",
        100,
        <span className="tableContainer__actions">
          <Button
            type="button"
            text={"Accept"}
            style={{
              backgroundColor: "#68ba86",
            }}
          />
          <Button
            type="button"
            text={"Decline"}
            style={{
              backgroundColor: "#d01225",
            }}
          />
        </span>,
      ],
      [
        "dksje23",
        "Networking",
        "Mohasin Raja",
        <span className="tableContainer__image">
          <img src="../../images/books/net.jpeg" alt="book image" />
        </span>,
        "6th",
        "Abdun Noor",
        20,
        <span className="tableContainer__actions">
          <Button
            type="button"
            text={"Accept"}
            style={{
              backgroundColor: "#68ba86",
            }}
          />
          <Button
            type="button"
            text={"Decline"}
            style={{
              backgroundColor: "#d01225",
            }}
          />
        </span>,
      ],
      [
        "dksje23",
        "DataBase Management System",
        "Mohasin Raja",
        <span className="tableContainer__image">
          <img src="../../images/books/dbms.jpeg" alt="book image" />
        </span>,
        "6th",
        "Abdun Noor",
        30,
        <span className="tableContainer__actions">
          <Button
            type="button"
            text={"Accept"}
            style={{
              backgroundColor: "#68ba86",
            }}
          />
          <Button
            type="button"
            text={"Decline"}
            style={{
              backgroundColor: "#d01225",
            }}
          />
        </span>,
      ],
      [
        "dksje23",
        "Python for Beginners",
        "Mohasin Raja",
        <span className="tableContainer__image">
          <img src="../../images/books/py.jpg" alt="book image" />
        </span>,
        "6th",
        "Abdun Noor",
        10,
        <span className="tableContainer__actions">
          <Button
            type="button"
            text={"Accept"}
            style={{
              backgroundColor: "#68ba86",
            }}
          />
          <Button
            type="button"
            text={"Decline"}
            style={{
              backgroundColor: "#d01225",
            }}
          />
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
    <div className="returnRequest">
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
      <section className="returnRequest__books-preview">
        <div className="returnRequest__book-table">
          <div className="returnRequest__header">
            <div className="returnRequest__select">
              <Select
                name="parPage"
                options={selectOptions}
                styles={{
                  marginTop: "0rem ",
                }}
              />
            </div>
            <div className="returnRequest__search">
              <InputGroup name="search" placeHolder={"search..."} type="text" />
            </div>
          </div>
          <Table
            thead={tableOptions.thead}
            tbody={tableOptions.tbody}
            isDashboard={false}
          />
          <div className="returnRequest__pagination">
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

export default ReturnRequest;
