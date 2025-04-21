// Ana sayfa

import "./Home.css"

import { FaBuildingColumns } from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

import Card from "../src/components/Card";


const Home = () => {

    const period_info = "2024-2025"; 
    const consultant_info = "Kali Gürkahraman"; 
    const faculty = "Mühendislik Fak./BİLGİSAYAR MÜHENDİSLİĞİ(İ.Ö.)"; 
    const register_year = "29.08.2020"; 
    const AGNO = 0.31;


    return ( 
        <div className="container">

            <div className="info">
                {/* burada kaç ders kaldı bilgisi alınabiliyorsa koyabilirsin */}
                <p><span>BİLGİLENDİRME</span> 2024-2025 Bahar döneminde 5 adet onaylanmıs ders kaydınız mevcut.</p>
            </div>

            <div className="card-container">
                <Card icon={<FaBuildingColumns />} title={"Aktif Akademik Dönem Bilgileri"} info={period_info} color={"#005A8C"} />
                <Card icon={<BsFillPersonVcardFill />} title={"Danışman bilgileri"} info={consultant_info} color={"#52B864"} />
                <Card icon={<FaBook />} title={"Öğrenim Bilgileri"} info={faculty} color={"#27A7DF"} />
                <Card icon={<FaDatabase />} title={"Kayıt Tarihi"} info={register_year} color={"#4C7C8F"} agno={AGNO} />
            </div>
            
        </div>
     );
}
 
export default Home;