import Link from "next/link";
import { CustomLayout } from "../components/layout/CustomLayout";

export default function Home() {
  return (
    <CustomLayout>
      <h2>Estamos en Home</h2>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </CustomLayout>
  );
}
