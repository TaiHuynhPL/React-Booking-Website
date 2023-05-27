import Navbar from "../home/Navbar/Navbar";
import FormRegister from "../home/FormRegister/FormRegister";
import Footer from "../home/Footer/Footer";
import DetailContent from "./DetailContent/DetailContent";
//Lấy data từ file json
import detail from "../../data/detail.json";

//Component trang Detail
const Detail = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DetailContent data={detail}></DetailContent>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
