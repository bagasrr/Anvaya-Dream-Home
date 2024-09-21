import Button from "../../Element/Button/Button";
import Input from "../../Element/Input/Input";

const Header = () => {
  const ImageBackground = {
    backgroundImage: `url(/source/backgroundheader.jpg`,
    height: "80vh",
  };
  return (
    <div className="w-screen flex justify-center relative mb-40 bg-cover bg-center" style={ImageBackground}>
      <div className="absolute -bottom-20 w-4/5 h-max p-5 sm:p-10 bg-teal-300/60  rounded shadow-lg">
        <p className="font-bold text-emerald-950 text-center text-xs sm:text-lg">Isi Form Untuk Dapatkan Informasi & Promo ekslusif perumahan Griya New</p>
        <div className="w-full my-5 flex flex-wrap justify-evenly sm:justify-center gap-1">
          <Input placeholder="Masukkan Nama Anda" />
          <Input placeholder="Nomor Telepon Yang Dapat Dihubungi" />
          <Input placeholder="Alamat Email Anda" />
          <Input placeholder="Domisili Anda" />
          <Input placeholder="Pilih Cluster Hunian" />
          <Button type="normal" Content="Dapatkan" />
        </div>
        <small className="ml-2/3 text-xs">* Keamanan data anda terjamin, Kami tidak akan memberikan data Pribadi anda ke pihak ketiga manapun.</small>
      </div>
    </div>
  );
};

export default Header;
