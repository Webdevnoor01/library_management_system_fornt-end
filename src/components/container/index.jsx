/* eslint-disable react/prop-types */
const Container = ({ children, background }) => {
  return (
    <div
      className="container"
      style={
        background && {
          backgroundColor: background,
          backgroundImage: "none",
        }
      }
    >
      <img
        src="../../images/bg_round.svg"
        alt=""
        className="container__bg-round-top-left"
      />
      <img
        src="../../images/bg_round.svg"
        alt=""
        className="container__bg-round-bottom-left"
      />
      {children}
      <img
        src="../../images/bg_round.svg"
        alt=""
        className="container__bg-round-bottom-right"
      />
      {/* <img
        src="../../images/bg_round.svg"
        alt=""
        className="container__bg-round-bottom-right"
      /> */}
    </div>
  );
};

export default Container;
