import "./Signin.css";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Navbar from "../src/components/Navbar";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="inner-container">
          <span className="signin-span">OBS'ye giriş yap</span>
          <form action="submit">
            <div className="user-input">
              <TextField
                className="input"
                id="outlined-basic"
                label="E-posta"
                variant="filled"
              />
            </div>
            <div className="user-input">
              <TextField
                className="input"
                id="outlined-basic"
                label="Şifre"
                variant="filled"
              />
            </div>
            <Button className="submit-btn" variant="contained">
              Giriş Yap
            </Button>
          </form>
          <p className="signin-p">
            Hesabınız yok mu?{" "}
            <span>
              <Link to="/signup">Kaydol</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
