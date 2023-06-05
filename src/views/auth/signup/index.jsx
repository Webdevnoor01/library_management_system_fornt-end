/* eslint-disable no-unused-vars */
import Container from "../../../components/container";

// mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import PhoneInTalkSharpIcon from "@mui/icons-material/PhoneInTalkSharp";
import SummarizeSharpIcon from "@mui/icons-material/SummarizeSharp";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";

// shared components
import InputGroup from "../../../components/shared/input-group";
import Select from "../../../components/shared/select";
import Button from "../../../components/ui/button";
const Signup = () => {
  const selectOptions = [
    {
      value: "",
      text: "choose your role",
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

  return (
    <Container>
      <div className="signup">
        <div className="signup__media">
          <img
            src="../../../images/library_register_img.jpg"
            alt="library"
            className="signup__img"
          />
        </div>
        <div className="signup__content">
          <h2 className="signup__heading">Welcome to libhub</h2>

          <form className="signup__form">
            {/* <div className="signup__input-group">
              <label htmlFor="name" className="signup__label">
                Name
              </label>
              <div className="signup__input-wrap">
                <input
                  className="signup__input"
                  type="text"
                  name="name"
                  placeholder="Mykel Jon"
                />
                <AccountCircleIcon className="signup__icon" />
              </div>
            </div> */}
            <InputGroup
              label={"Name"}
              name={"name"}
              type={"text"}
              placeHolder={"Jon Doo"}
              Icon={AccountCircleIcon}
            />
            <InputGroup
              label={"Phone"}
              name={"phone"}
              type={"text"}
              placeHolder={"+91 7865243764"}
              Icon={PhoneInTalkSharpIcon}
            />
            <InputGroup
              label={"Library Id"}
              name={"libraryId"}
              type={"text"}
              placeHolder={"cst_01"}
              Icon={SummarizeSharpIcon}
            />
            <InputGroup
              label={"Password"}
              name={"password"}
              type={"password"}
              placeHolder={"anyPassword@1234"}
              Icon={HttpsSharpIcon}
            />
            <Select name="role" options={selectOptions} />
            <Button text={"signup"} type={"submit"} />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
