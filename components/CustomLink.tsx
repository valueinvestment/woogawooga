import Link from "next/link";

const CustomLink: React.FC<any> = ({ children, href, ...props }) => {
  return (
    <>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </>
  );
};

export { CustomLink };
