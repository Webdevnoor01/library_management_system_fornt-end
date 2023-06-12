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

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);

  const tableOptions = {
    thead: [
      "Book Id",
      "Book Name",
      "Author Name",
      "Edition",
      "Quantity",
      "Actions",
    ],
    tbody: [
      [
        "dksje23",
        "Data Structure",
        "Samim Sk",
        210,
        21,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "dksje23",
        "Data Structure",
        "Rabiul Sk",
        150,
        15,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "dksje23",
        "Data Structure",
        "Mohasin Raja",
        100,
        10,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "dksje23",
        "Data Structure",
        "Mohasin Raja",
        500,
        30,
        <span className="tableContainer__actions">
          <ActionView />
          <ActionEdit />
          <ActionDelete />
        </span>,
      ],
      [
        "dksje23",
        "Data Structure",
        "Mohasin Raja",
        200,
        20,
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
  const bookSelectOption = [
    {
      value: "",
      text: "Select Category",
    },
    {
      value: "Networking",
      text: "Networking",
    },
    {
      value: "Programming",
      text: "Programming",
    },
    {
      value: "Electric",
      text: "Electric",
    },
  ];

  return (
    <div className="books">
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
          <Link>Books</Link>{" "}
        </span>
      </section>
      <section className="books__books-preview">
        <div className="books__book-table">
          <div className="books__header">
            <div className="books__select">
              <Select
                name="parPage"
                options={selectOptions}
                styles={{
                  marginTop: "0rem ",
                }}
              />
            </div>
            <div className="books__search">
              <InputGroup name="search" placeHolder={"search..."} type="text" />
            </div>
          </div>
          <Table
            thead={tableOptions.thead}
            tbody={tableOptions.tbody}
            isDashboard={false}
          />
          <div className="books__pagination">
            <Pagination
              totalItems={50}
              showItem={5}
              parPage={parPage}
              pageNumber={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        <div className="books__add-book">
          <div className="books__addBook-heading">
            <h2>Add Book</h2>
          </div>
          <form className="books__form">
            <div className="books__input-group">
              <div className="books__first-input">
                <InputGroup
                  name="bookName"
                  type="text"
                  label="Book Name"
                  placeHolder={"Data Structure"}
                  color="#4e4e4e"
                />
              </div>
              <div className="books__second-input">
                <InputGroup
                  name="authorName"
                  type="text"
                  label="Author Name"
                  placeHolder={"Mc. Grew Hill"}
                  color="#4e4e4e"
                />
              </div>
            </div>

            <div className="books__input-group">
              <div className="books__first-input">
                <InputGroup
                  name="bookEdition"
                  type="text"
                  label="Book Edition"
                  placeHolder={"5th, 6th..."}
                  color="#4e4e4e"
                />
              </div>
              <div className="books__second-input">
                <InputGroup
                  name="bookQuantity"
                  type="text"
                  label="Book Quantity"
                  placeHolder={"5"}
                  color="#4e4e4e"
                />
              </div>
            </div>

            <div className="books__input-group">
              <div className="books__first-input">
                <InputGroup
                  name="isbn"
                  type="text"
                  label="ISBN"
                  placeHolder={"sgcc-3434-fd34"}
                  color="#4e4e4e"
                />
              </div>
              <div className="books__second-input">
                <InputGroup
                  name="almirahNo"
                  type="text"
                  label="Almary No."
                  placeHolder={"5"}
                  color="#4e4e4e"
                />
              </div>
            </div>

            <div className="books__single-input">
              <Select
                name="catagory"
                options={bookSelectOption}
                styles={{
                  width: "100%",
                  marginTop: "0rem",
                }}
              />
            </div>

            <div className="books__image-group">
              <div className="books__image-input">
                <span>Select Image</span>
              </div>
            </div>
            <div className="books__btn-group">
              <Button type="submit" text={"Add Book"} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Books;
