import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ show }) => {
 



  return (
    <div className={show ? "sidebar active" : "sidebar"}>
      <div className="logo-section">
        <img src="uni_logo.gif" alt="" className="logo" />
        <p>Sivas Cumhuriyet Üniversitesi</p>
        <div className="underline" />
        <p>Öğrenci bilgi sistemi</p>
      </div>
      <ul>
        <li>
          <Link to="/note-list">Not listesi</Link>
        </li>
        <li>
          <Link to="/course-register">Ders Kayıt</Link>
        </li>
        <li>
          <Link to="/period-averages">Dönem Ortalamaları</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
