import PKAnvayaPDF from "/source/PK_The_Anvaya.pdf";

const PageLink = (props) => {
  const { type } = props;
  return type === "pdf" ? PDFDownload(props) : type === "normal" ? NormalLink(props) : null;
};
export default PageLink;

const PDFDownload = (props) => {
  const { content } = props;
  return (
    <a href={PKAnvayaPDF} download="The_anvaya.pdf" className="cursor-pointer">
      {content}
    </a>
  );
};

const NormalLink = (props) => {
  const { url, content } = props;
  return <a href={url}>{content}</a>;
};
