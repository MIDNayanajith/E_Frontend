import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [action, setAction] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/dashboard");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  const registerLink = () => {
    setAction("active");
  };
  const loginlink = () => {
    setAction("");
  };

  return (
    <div className="login">
      <div className={`wrapper ${action}`}>
        {/* Login Form */}
        <div className="form-box log">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
              <i className="bx bxs-lock"></i>
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="#">Forgot Password?</Link>
            </div>
            {err && err}
            <button type="submit" onClick={handleLogin} className="btn">
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link to="#" onClick={registerLink}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box reg">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock"></i>
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <Link to="#" onClick={loginlink}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
