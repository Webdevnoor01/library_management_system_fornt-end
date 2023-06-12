/* eslint-disable react/prop-types */

const DashboardCard = ({ value, title, Icon }) => {
  return (
    <div className="dashboard__card">
      <div className="dashboard__content">
        <h3 className="dashboard__value">{value}</h3>
        <span className="dashboard__title">{title}</span>
      </div>
      <div className="dashboard__icondiv">
        <Icon className="dashboard__icon" />
      </div>
    </div>
  );
};

export default DashboardCard;
