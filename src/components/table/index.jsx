/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import shortid from "shortid";

const Table = ({ thead, tbody, heading, isDashboard }) => {
  return (
    <div className="tableContainer">
      {heading && (
        <div className="tableContainer__heading">
          <h3> {heading} </h3>
          {isDashboard && <Link>view all</Link>}
        </div>
      )}
      <table className="tableContainer__table ">
        <thead className="tableContainer__thead">
          <tr>
            {thead &&
              thead.map((thData) => (
                <th
                  key={shortid.generate()}
                  scope="col"
                  className="tableContainer__tr"
                >
                  {thData}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.map((td) => (
              <tr key={shortid.generate()} className="tableContainer__tr">
                {td.map((tdData) => (
                  <td
                    key={shortid.generate()}
                    scope="col"
                    className="tableContainer__td"
                  >
                    {tdData}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
