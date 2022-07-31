import Link from "next/link";
import { CustomLayout } from "../../components/layout/CustomLayout";

export default function Pricing() {
  return (
    <>
      <h2>Estamos en Pricing</h2>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return <CustomLayout>{page}</CustomLayout>;
};
