// Ders kayıt sayfası
import "./CourseRegister.css";

import { FaInfoCircle } from "react-icons/fa";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CourseRegister = () => {
  const createData = (name, student_info, fat, carbs) => {
    return { name, student_info, fat, carbs };
  };

  //    Burada ders kayıt ekranında öğrencinin numara, isim soyisim, fakültesi,
  // kayıt tarihi, müfredatı, öğrenim durumu ve genel ortalaması backendden çekilip değişkenlere atanacak
  const student_num_name = "2020141023" + " - " + "Fahri Faruk SONAT";
  const faculty = "Mühendislik Fak.-BİLGİSAYAR MÜHENDİSLİĞİ(İ.Ö)/4";
  const register_year = "29.08.2020 / ÖSS";
  const curriculum = "2020 BİLGİSAYAR MÜHENDİSLİĞİ(İ.Ö.) Müfredatı";
  const stuation = "Normal Süresi Dışında(Uzatma)";
  const average = "2,15";

  const prev_per_balance = "0,00 ₺";
  const per_balance = "3.307,50 ₺";
  const total_be_paid = "3.307,50 ₺";
  const paid = "3.307,50 ₺";
  const general_balance = "0,00 ₺";

  const rows = [
    createData(
      "Öğrenci No/Adı Soyadı",
      student_num_name,
      "Önceki Dönem Bakiye",
      prev_per_balance
    ),
    createData(
      "Fakülte - Program/Sınıf",
      faculty,
      "Dönemlik Ücret",
      per_balance
    ),
    createData(
      "Kayıt Tarihi/Nedeni",
      register_year,
      "Ödenmesi Gereken Toplam Ücret",
      total_be_paid
    ),
    createData(
      "Bağlı Olunan Müfredat",
      curriculum,
      "Ödenen Toplam Ücret",
      paid
    ),
    createData("Öğrenim Süre Durum", stuation, "Genel Bakiye", general_balance),
    createData("Genel Ortalama", average),
  ];

  //burası ders kayıt durumu tablosu için
  const student_stuation = "Kesinleştirildi";
  const consult_stuation = "Onaylandı";

  //burası seçilen dersler tablosu için

  // * burası seçilen dersler tablosunun backendden gelecek verilerini değişkenlere atayacagın yer

  //bu dersler değişkeni backkendden gelen veri örneği olarak

  const dersler = {
    ders_kod: [
      "BİL304S[BİL304S]",
      "BİL306[BİL306]",
      "BİL308[BİL308]",
      "BİL3012[BİL3012]",
      "BİL4214",
    ],
    ders_adlari: [
      "Yazılım Mühendisliği",
      "İnternet Teknolojileri",
      "Bilgisayar Ağları",
      "Görsel Programlama",
      "Bulut Bilişim",
    ],
    z_s: ["S", "Z", "Z", "S", "S"],
    t_u: [3, 3, 3, 3, 3],
    krd: [3, 3, 3, 3.5, 3],
    akts: [5, 5, 5, 4, 6],
    snf: [3, 3, 3, 3, 4],
    alıs: ["Alttan", "Alttan", "Alttan", "Alttan", "Alttan"],
    neden: ["Dnm.", "Dnm.", "Dnm.", "Dnm.", "Dnm."],
  };

  return (
    <div className="container">
      <div className="register-info">
        <p className="register-p">
          <span className="register-info">Uyarı</span> 2024-2025 Bahar dönemi
          MÜHENDİSLİK FAKÜLTESİ, akademik takvime göre, ders kayıt işlemleri
          07.02.2025 23:59 tarihine kapatılmıştır(!).
        </p>
      </div>

      <div className="card-container">
        <div className="register-card">
          <div className="register-title">Ders Kayıt Öğrenci Bilgileri</div>
          <div className="student-info">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.student_info}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div style={{ paddingBottom: "15px" }} />

          {/* Ders Kayıt Durumu tablosu */}

          <div className="register-title">Ders Kayıt Durumu</div>
          <div className="student-info">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody style={{ display: "flex", flexDirection: "row" }}>
                  <TableCell style={{ display: "flex" }}>
                    Öğrenci Kesinleştirme Durumu:&nbsp;
                    <div style={{ color: "red" }}>{student_stuation}</div>
                  </TableCell>
                  <TableCell style={{ display: "flex", marginLeft: "45px" }}>
                    Danışman Onay Durumu:&nbsp;
                    <div style={{ color: "red" }}>{consult_stuation}</div>
                  </TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div style={{ paddingBottom: "15px" }} />

          {/* Seçilen Dersler */}

          <div className="register-title">Seçilen Dersler</div>
          <div className="student-info">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ background: "#6B6B6B" }}>
                  <TableRow>
                    <TableCell align="center" style={{ color: "white" }}>
                      Şb. Ders Kodu
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Ders Adı
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Z/S T+U
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Krd
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      AKTS
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Snf
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Alış
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Aç.Neden
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "white" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dersler.ders_kod.map((drs_kod, index) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={drs_kod}
                    >
                      <TableCell align="center">{drs_kod}</TableCell>
                      <TableCell align="center">
                        {dersler.ders_adlari[index]}
                      </TableCell>
                      <TableCell align="center">
                        <span>{dersler.z_s[index]}</span> - {dersler.t_u[index]}
                      </TableCell>
                      <TableCell align="center">{dersler.krd[index]}</TableCell>
                      <TableCell align="center">
                        {dersler.akts[index]}
                      </TableCell>
                      <TableCell align="center">{dersler.snf[index]}</TableCell>
                      <TableCell align="center">
                        {dersler.alıs[index]}
                      </TableCell>
                      <TableCell align="center">
                        {dersler.neden[index]}
                      </TableCell>
                      <TableCell align="center">
                        <FaInfoCircle />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ paddingBottom: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default CourseRegister;
