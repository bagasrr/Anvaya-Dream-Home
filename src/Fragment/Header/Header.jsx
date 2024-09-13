import Button from "../../Element/Button/Button";
import Input from "../../Element/Input/Input";

const Header = () => {
  const ImageBackground = {
    backgroundImage: `url(/source/backgroundheader.jpg`,
    height: "80vh",
  };
  return (
    <div className="flex justify-center relative mb-40 bg-cover bg-center" style={ImageBackground}>
      <div className="absolute -bottom-20 flex flex-wrap gap-5 w-4/5 p-10 bg-teal-300/60 justify-center h-max rounded shadow-lg">
        <Input placeholder="Masukkan Nama Anda" />
        <Input placeholder="Nomor Telepon Yang Dapat Dihubungi" />
        <Input placeholder="Alamat Email Anda" />
        <Input placeholder="Domisili Anda" />
        <Input placeholder="Pilih Cluster Hunian" />
        <Button Content="Dapatkan Sekarang" />
      </div>
    </div>
  );
};

export default Header;
