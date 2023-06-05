/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */

// Formik
import { useFormik } from "formik";
import * as yup from "yup";

// mui icons
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";

// container
import Container from "../../../components/container";

// shared components
import InputGroup from "../../../components/shared/input-group";
import Select from "../../../components/shared/select";
import Button from "../../../components/ui/button";
import ErrorText from "../../../components/shared/form-error-text";
const Login = () => {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        role: "",
      },
      onSubmit: (data) => {
        console.log("login-data: ", data);
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .email("please type valid email")
          .required("please enter your gmail"),
        password: yup
          .string("please enter your password")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          )
          .required("Please enter your password"),
        role: yup.string().required("Please select your role"),
      }),
    });
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
    <Container background={"#2d6acb"}>
      <div className="login">
        <div className="login__content">
          <h2 className="login__heading">Welcome to libhub</h2>

          <form className="login__form" onSubmit={handleSubmit}>
            <InputGroup
              label={"Email"}
              name={"email"}
              type={"email"}
              placeHolder={"example123@gamil.com"}
              Icon={AlternateEmailSharpIcon}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <ErrorText text={errors.email} />
            ) : null}
            <InputGroup
              label={"Password"}
              name={"password"}
              type={"password"}
              placeHolder={"anyPassword@1234"}
              Icon={HttpsSharpIcon}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <ErrorText text={errors.password} />
            ) : null}
            <Select
              name="role"
              options={selectOptions}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
            />
            {touched.role && errors.role ? (
              <ErrorText text={errors.role} />
            ) : null}
            <Button text={"login"} type={"submit"} />
          </form>
        </div>
        <div className="login__media">
          <img
            src="../../../images/library_login_img.png"
            alt="library"
            className="login__img"
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
