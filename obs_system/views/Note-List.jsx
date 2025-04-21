// Not listesi sayfası
import "./Note-list.css";

import { FaInfoCircle } from "react-icons/fa";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import tdersler from "../src/dersler";
import { useState } from "react";

const NoteList = () => {
  const tum_dersler = tdersler;
  const [selectedDonem, setSelectedDonem] = useState(
    tum_dersler.donemler[tum_dersler.donemler.length - 1].ad
  );

  const handleChange = (event) => {
    setSelectedDonem(event.target.value);
    console.log("Seçilen dönem2:", selectedDonem);
    console.log("Seçilen dönem:", event.target.value);
  };

  const aktifDonem = tum_dersler.donemler.find(
    (donem) => donem.ad === selectedDonem
  );
  return (
    <div>
      <Box
        sx={{
          minWidth: 120,

          paddingTop: 5,
          paddingLeft: 10,
        }}
      >
        <FormControl sx={{}}>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{ fontSize: 25 }}
          >
            Dönem
          </InputLabel>
          <NativeSelect
            sx={{ width: 350 }}
            defaultValue={selectedDonem}
            onChange={handleChange}
            inputProps={{
              name: "period",
              id: "uncontrolled-native",
            }}
          >
            {tum_dersler.donemler.map((ders_adi, index) => (
              <option
                key={tum_dersler.donemler[index].ad}
                value={tum_dersler.donemler[index].ad}
              >
                &nbsp;&nbsp;&nbsp;{tum_dersler.donemler[index].ad}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <div style={{ paddingBottom: "30px" }} />

      <div className="notelist-title">Özet Not Durumu</div>
      <div className="notelist-info">
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
                  S.Durum
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Sınav Notları
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Ort.
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Not
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Durumu
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aktifDonem.ders_kod.map((drs_kod, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={drs_kod}
                >
                  <TableCell align="center">{drs_kod}</TableCell>
                  <TableCell align="center">
                    {aktifDonem.ders_adlari[index]}
                  </TableCell>
                  <TableCell align="center">
                    <span>{aktifDonem.s_durum[index]}</span>
                  </TableCell>
                  <TableCell align="center">
                    {aktifDonem.snv_not[index]}
                  </TableCell>
                  <TableCell align="center">{aktifDonem.akts[index]}</TableCell>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">--</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* burası mavi bilgi kutusunun oldugu yer  */}
      <div className="blue-info">
        <div style={{ padding: 15 }}>
          <h4 className="blue-info-h4">Notlar</h4>
          <p className="blue-info-p" style={{ color: "#2256FA" }}>
            <span className="blue-info-span">
              (Ders sonuçlandırılmadı olarak görüntülenmesi)
            </span>{" "}
            ne anlama geliyor:
          </p>
          <p className="blue-info-p" style={{ color: "#000" }}>
            1- Yarıyıl sonu sınavı notu henüz girilmedi<br></br> <br></br>
            2- Tüm sınav notları girildi fakat harf notu henüz hesaplanmadı
            <br></br> <br></br>
            3- Not girişi tamamlanmayan bütünleme sınavı mevcut<br></br>{" "}
            <br></br>
            4- Bütünleme sınav notları girildi fakat henüz harf notu
            hesaplanmadı<br></br> <br></br>
          </p>
          <p className="blue-info-p" style={{ color: "#2256FA" }}>
            Harf notunun "--" olarak görünmesi ne anlama geliyor.
          </p>
          <p className="blue-info-p" style={{ color: "#000" }}>
            1- Akademik takvime göre harf notlarının ilan tarihi bekleniyor
            (Akademik takvimden ilgili tarihleri kontrol edebilirsiniz)<br></br>{" "}
            <br></br>
            2- Ders sonuçlandırılmamış/ilan edilmemiş olabilir
            <br></br> <br></br>
            3- Derse ait bütünleme sınavı tanımlanmış ise Akademik Takvimde yer
            alan bütünleme ilan tarihi beklenir<br></br> <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
