export const Title = (props) => {
  const { title, fontColor = "text-black" } = props;
  return (
    <h1 className="text-xl sm:text-3xl mb-5 font-bold text-center" style={{ color: fontColor }}>
      {title}
    </h1>
  );
};
