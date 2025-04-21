import { BarChart } from "@mui/x-charts/BarChart";

import "./Period-avg.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const PeriodAvg = () => {
  const data = {
    periodlar: [
      "1. Sınıf Güz",
      "1. Sınıf Bahar",
      "2. Sınıf Güz",
      "2. Sınıf Bahar",
      "3. Sınıf Güz",
      "3. Sınıf Bahar",
      "4. Sınıf Güz",
      "4. Sınıf Bahar",
    ],
    grafik_datasi: [
      {
        label: "Alınan notlar",
        data: [3.5, 2.8, 3.2, 3.9, 3.7, 3.0, 2.9, 3.4],
      },
    ],
    aldiği_ders_sayisi: [7, 9, 7, 7, 6, 7, 7, 6, 4],
    toplam_kredi: [20.5, 21.5, 20.5, 17, 20, 20.5, 14, 11],
    toplam_akts: [27, 34, 32, 22, 29, 30, 28, 19],
    donem_ortalamasi: [1.2, 3.8, 0.5, 2.6, 3.1, 0.9, 2.3, 1.7],
    genel_donem_ortalamalari: [2.4, 0.8, 3.6, 1.9, 2.7, 0.3, 3.0, 1.1],
  };

  return (
    <div className="period-container">
      <div className="period-title">Dönem Ortalamaları</div>
      <div className="student-info">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ background: "#6B6B6B" }}>
              <TableRow>
                <TableCell align="center" style={{ color: "white" }}>
                  Dönem Adı
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Aldığı Ders Sayısı
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Toplam Kredi
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Toplam Akts
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Donem Ortalaması
                </TableCell>
                <TableCell align="center" style={{ color: "white" }}>
                  Genel Not Ortalaması
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.periodlar.map((period, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={period}
                >
                  <TableCell align="center">{period}</TableCell>
                  <TableCell align="center">
                    {data.aldiği_ders_sayisi[index]}
                  </TableCell>
                  <TableCell align="center">
                    {data.toplam_kredi[index]}
                  </TableCell>
                  <TableCell align="center">
                    {data.toplam_akts[index]}
                  </TableCell>
                  <TableCell align="center">
                    {data.donem_ortalamasi[index]}
                  </TableCell>
                  <TableCell align="center">
                    {data.genel_donem_ortalamalari[index]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ paddingBottom: "15px" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableCell>
                Dersin başarı ve sonuçlanma durumana bakılmaksızın(ders
                tekrarlarında son alınan ders kredi toplamına dahildir)[Toplam
                Kredi]:{" "}
                {data.toplam_kredi
                  .map((num) => num)
                  .reduce((acc, curr) => acc + curr, 0)}
              </TableCell>
              <TableCell>
                Dersin başarı ve sonuçlanma durumana bakılmaksızın(ders
                tekrarlarında son alınan ders kredi toplamına dahildir)[Toplam
                AKTS]:{" "}
                {data.toplam_akts
                  .map((num) => num)
                  .reduce((acc, curr) => acc + curr, 0)}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ paddingBottom: "15px" }} />
      <BarChart
        xAxis={[{ scaleType: "band", data: data.periodlar }]}
        series={data.grafik_datasi}
        height={300}
      />
      <div style={{ paddingBottom: "40px" }} />
    </div>
  );
};

export default PeriodAvg;
