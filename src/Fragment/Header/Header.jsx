import Input from "../../Element/Input/Input";

const Header = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col gap-5 w-4/5 bg-black">
        <Input placeholder="Masukkan Nama Anda" />
        <Input placeholder="Nomor Telepon Yang Dapat Dihubungi" />
        <Input placeholder="Alamat Email Anda" />
        <Input placeholder="Domisili Anda" />
        <Input placeholder="Pilih Cluster Hunian" />
      </div>
    </div>
  );
};

export default Header;
