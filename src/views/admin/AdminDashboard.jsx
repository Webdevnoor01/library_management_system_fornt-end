/* eslint-disable react/jsx-key */
// MUI-Icons
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import KeyboardReturnSharpIcon from "@mui/icons-material/KeyboardReturnSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
// Components
import PiChart from "../../components/pi-chart";
import BarChart from "../../components/bar-chart";
import DashboardCard from "../../components/dashboard-card";
import Table from "../../components/table";
import ActionView from "../../components/table-actions/action-view";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <h2 className="dashboard__heading">
          Hello, <span className="dashboard__username">Abdun Noor</span>
        </h2>
      </section>

      <section className="dashboard__cards">
        <DashboardCard
          value={12938}
          title={"Borrowed Books"}
          Icon={PeopleAltSharpIcon}
        />
        <DashboardCard
          value={12938}
          title={"Requested Books"}
          Icon={MenuBookSharpIcon}
        />
        <DashboardCard
          value={12938}
          title={"Return Request"}
          Icon={KeyboardReturnSharpIcon}
        />
        <DashboardCard
          value={12938}
          title={"Fined User"}
          Icon={MonetizationOnSharpIcon}
        />
      </section>

      <section className="dashboard__overview">
        <div className="dashboard__bar-chart">
          <div className="dashboard__chart-heading">Overview</div>
          <BarChart
            height={305}
            series={[
              {
                name: "Borrowed Books",
                data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45],
              },
              {
                name: "Requested books",
                data: [10, 30, 19, 30, 80, 70, 100, 90, 35, 100, 80, 90],
              },
              {
                name: "Rturned Books",
                data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
              },
              {
                name: "Request Return",
                data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
              },
            ]}
            categories={[
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
          />
        </div>
        <div className="dashboard__pi-chart">
          <div className="dashboard__chart-heading">User Analytics Board</div>
          <PiChart
            height={340}
            width="30%"
            data={[500, 400, 300, 390]}
            labels={["Students", "Teachers", "Staffs", "Assistants"]}
          />
        </div>
      </section>

      <section className="dashboard__tables">
        <div className="dashboard__recent-request">
          <Table
            heading={"Recent Requested Books"}
            thead={[
              "Book Id",
              "Book Name",
              "Author Name",
              "User Name",
              "Action",
            ]}
            tbody={[
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Samim Sk",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Rabiul Sk",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
            ]}
            isDashboard={true}
          />
        </div>
        <div className="dashboard__return-request">
          <Table
            heading={"Return Requested Books"}
            thead={[
              "Book Id",
              "Book Name",
              "Author Name",
              "User Name",
              "Action",
            ]}
            tbody={[
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Samim Sk",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Rabiul Sk",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "MC Grew",
                "Mohasin Raja",
                <ActionView />,
              ],
            ]}
            isDashboard={true}
          />
        </div>
        <div className="dashboard__overdued-books">
          <Table
            heading={"Overdued books"}
            thead={[
              "Book Id",
              "Book Name",
              "User Name",
              "Total Fine",
              "Delay",
              "Action",
            ]}
            tbody={[
              [
                "dksje23",
                "Data Structure",
                "Samim Sk",
                210,
                21,
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "Rabiul Sk",
                150,
                15,
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "Mohasin Raja",
                100,
                10,
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "Mohasin Raja",
                500,
                30,
                <ActionView />,
              ],
              [
                "dksje23",
                "Data Structure",
                "Mohasin Raja",
                200,
                20,
                <ActionView />,
              ],
            ]}
            isDashboard={true}
          />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
