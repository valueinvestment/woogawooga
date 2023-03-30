import Link from "next/link";

const CustomLink: React.FC<any> = ({ children, href, ...props }) => {
  return (
    <>
      <Link href={href} passHref>
        <a style={{ display: "flex", width: "100%" }}>{children}</a>
      </Link>
    </>
  );
};

export { CustomLink };
