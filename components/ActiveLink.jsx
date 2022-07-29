import Link from "next/link";
import { useRouter } from "next/router";

const active = {
  color: "#0070F3",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? active : null}>{text}</a>
    </Link>
  );
};
