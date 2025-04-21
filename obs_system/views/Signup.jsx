import "./Signup.css";

import Navbar from "../src/components/Navbar";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="inner-container">
          <span className="signin-span">OBS'de hesap oluştur</span>
          <form action="submit">
            <div className="user-input">
              <TextField
                className="input"
                id="outlined-basic"
                label="İsim"
                variant="filled"
              />
            </div>
            <div className="user-input">
              <TextField
                className="input"
                id="outlined-basic"
                label="Soyadı"
                variant="filled"
              />
            </div>
            <div className="user-input">
              <TextField
                className="input"
                id="outlined-basic"
                label="E-Posta"
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
              Kaydol
            </Button>
          </form>
          <p className="signin-p">
            Zaten hesabınız var mı?{" "}
            <span>
              <Link to="/signin">giriş yap</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
