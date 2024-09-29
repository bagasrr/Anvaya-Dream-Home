import { useState } from "react";
import Button from "../../Element/Button/Button";
import Input from "../../Element/Input/Input";

const Header = () => {
  const ImageBackground = {
    backgroundImage: `url(/source/backgroundheader.jpg`,
    height: "80vh",
  };

  const [inputName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const [inputPhoneNumber, setInputPhoneNumber] = useState("+62");
  const handleNumberChange = (e) => {
    setInputPhoneNumber(e.target.value);
  };

  const [inputEmail, setInputEmail] = useState("");
  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const [inputDomisili, setInputDomisili] = useState("");
  const handleDomisiliChange = (e) => {
    setInputDomisili(e.target.value);
  };

  const [inputCluster, setInputCluster] = useState("");
  const handleClusterChange = (e) => {
    setInputCluster(e.target.value);
  };

  const handleSubmit = () => {
    console.log(inputName, inputPhoneNumber, inputEmail, inputDomisili, inputCluster);

    window.open(
      `https://wa.me/6281252800095?text=${encodeURIComponent(
        `Hi, Saya ${inputName} tertarik dengan Anvaya. Apakah saya bisa bertanya mengenai Anvaya? terlebih tentang Cluster : ${inputCluster} \n Ini adalah kontak saya :\n Email : ${inputEmail} \n Nomor Telephone :  ${inputPhoneNumber} \n Domisili : ${inputDomisili}`
      )}`
    );

    setInputName("");
    setInputPhoneNumber("");
    setInputEmail("");
    setInputDomisili("");
    setInputCluster("");
  };
  return (
    <div className="w-screen flex justify-center relative mb-40 bg-cover bg-center" style={ImageBackground}>
      <div className="absolute -bottom-20 w-4/5 h-max p-5 sm:p-10 bg-teal-300/60  rounded shadow-lg">
        <p className="font-bold text-emerald-950 text-center text-xs sm:text-lg">Isi Form Untuk Dapatkan Informasi & Promo ekslusif perumahan Griya New</p>
        <div className="w-full my-5 flex flex-wrap justify-evenly sm:justify-center gap-1">
          <Input type="text" placeholder="Masukkan Nama Anda" inputId="nama" handleOnChange={handleNameChange} inputValue={inputName} />
          <Input type="number" placeholder="Nomor Telepon Yang Dapat Dihubungi" inputId="nama" handleOnChange={handleNumberChange} inputValue={inputPhoneNumber} />
          <Input type="email" placeholder="Alamat Email Anda" handleOnChange={handleEmailChange} inputValue={inputEmail} />
          <Input type="text" placeholder="Domisili Anda" handleOnChange={handleDomisiliChange} inputValue={inputDomisili} />
          <Input placeholder="Pilih Cluster Hunian" handleOnChange={handleClusterChange} inputValue={inputCluster} />
          <Button type="normal" Content="Dapatkan" handleSubmit={handleSubmit} />
        </div>
        <small className="ml-2/3 text-xs">* Keamanan data anda terjamin, Kami tidak akan memberikan data Pribadi anda ke pihak ketiga manapun.</small>
      </div>
    </div>
  );
};

export default Header;
