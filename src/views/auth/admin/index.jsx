/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

// react-redux
import { useDispatch, useSelector } from "react-redux";
// formik
import { useFormik } from "formik";
import * as yup from "yup";

// react-router-dom
import { useNavigate } from "react-router-dom";

import Container from "../../../components/container";

// mui icons
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";

// shared components
import InputGroup from "../../../components/shared/input-group";
import Select from "../../../components/shared/select";
import Button from "../../../components/ui/button";
import ErrorText from "../../../components/shared/form-error-text";

// actions
import { login, resetMessages } from "../../../store/reducers/authReducer";

// util libraries
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const AdminLogin = () => {
  const { errorMessage, successMessage, loading } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    onSubmit: async (data) => {
      console.log("formData", data);

      const user = await dispatch(login(data));
      console.log("user: ", user);
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
      value: "libAdmin",
      text: "Admin",
    },
    {
      value: "Assistant",
      text: "Assistant",
    },
    {
      value: "Staff",
      text: "Staff",
    },
  ];

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
      navigate("/admin/dashboard");
    }
    dispatch(resetMessages());
  }, [errorMessage, successMessage]);

  return (
    <Container background={"#2d6acb"}>
      <div className="login">
        <div className="login__content">
          <div className="login__logo">
            <img
              src="../../../images/admin_login_logo.png"
              alt=""
              className="login__logo-img"
            />
          </div>
          <h2 className="login__heading">Welcome to libhub Admin Login</h2>

          <form className="login__form" onSubmit={formik.handleSubmit}>
            <InputGroup
              label={"Email"}
              name={"email"}
              type={"email"}
              placeHolder={"example123@gamil.com"}
              Icon={AlternateEmailSharpIcon}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText text={formik.errors.email} />
            ) : null}

            <InputGroup
              label={"Password"}
              name={"password"}
              type={"password"}
              placeHolder={"anyPassword@1234"}
              Icon={HttpsSharpIcon}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorText text={formik.errors.password} />
            ) : null}
            <Select
              name="role"
              options={selectOptions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            />
            {formik.touched.role && formik.errors.role ? (
              <ErrorText text={formik.errors.role} />
            ) : null}
            <Button text={loading ? <BeatLoader /> : "login"} type={"submit"} />
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

export default AdminLogin;
