import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

// MY IMPORTS

import { clientRoutes } from "../../routes";
import { validateFormRegister } from "../../utils/validate";

import { registerUser } from "../../features/user/userSlice";

import { setLoadingClose, setLoadingShow } from "../../features/loadingSlice";
import HelmetCustom from "../../components/HelmetCustom";
import Breadcrumb from "../../components/Breadcrumb";
import { toastWarning } from "../../utils/toast";
import { Form } from "react-bootstrap";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.user);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  let disabled =
    !inputs.email || !inputs.name || !inputs.password || !inputs.password2;
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const err = validateFormRegister(inputs);
    if (err) {
      toastWarning(err);
      return;
    }
    dispatch(setLoadingShow());
    const { payload } = await dispatch(registerUser(inputs));
    dispatch(setLoadingClose());
    if (payload.status === 201) {
      navigate(clientRoutes.login);
    }
  };
  return (
    <div className="register">
      <HelmetCustom title="Đăng ký" />
      <Breadcrumb title="Đăng ký tài khoản" />
      <div className="container">
        <motion.div
          className="register__form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Form className="form position-relative">
            <h5 className="text-center py-2">ĐĂNG KÝ</h5>
            <p className="text-center ">
              Đã có tài khoản đăng nhập
              <Link className="text-secondary ms-1" to={clientRoutes.login}>
                tại đây
              </Link>
            </p>
            <div className="form-group">
              <Form.Control
                type="text"
                placeholder="   Tên hiển thị"
                name="name"
                onChange={handleChange}
              />
              <Form.Control
                type="email"
                placeholder="   Email"
                name="email"
                onChange={handleChange}
              />
              <Form.Control
                type="password"
                placeholder="   Mật khẩu cấp 1"
                name="password"
                onChange={handleChange}
              />
              <Form.Control
                type="password"
                placeholder="   Mật khẩu cấp 2"
                name="password2"
                onChange={handleChange}
              />
              <div className="mb-3  position-relative">
                <button
                  type="submit"
                  className="btn btn-primary w-100 hover-bg-secondary btn-md"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  ĐĂNG KÝ
                </button>
              </div>
              <div className="mb-3">
                <p className="d-flex justify-content-center">
                  <span>hoặc đăng nhập qua</span>
                </p>
              </div>
              <div className="mb-3 d-flex justify-content-center gap-2">
                <button type="submit" className="btn btn-facebook">
                  <span></span>
                  Facebook
                </button>
                <button type="submit" className="btn btn-google">
                  <span></span>
                  Google
                </button>
              </div>
            </div>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
