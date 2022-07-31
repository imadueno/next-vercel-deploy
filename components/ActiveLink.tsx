import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const active: CSSProperties = {
  color: "#0070F3",
  textDecoration: "underline",
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? active : {}}>{text}</a>
    </Link>
  );
};
