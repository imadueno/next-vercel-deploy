import Link from "next/link";
import { CustomLayout } from "../components/layout/CustomLayout";
import { DarkLayout } from "../components/layout/DarkLayout";

export default function About() {
  return (
    <>
      <h2>Estamos en About</h2>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <CustomLayout>
      <DarkLayout>{page}</DarkLayout>
    </CustomLayout>
  );
};
