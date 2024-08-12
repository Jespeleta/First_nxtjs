import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href="/">Home</Link><br />
    <Link href="/direccion1">pagina 1</Link><br />
    <Link href="/direccion2">pagina 2</Link>
    </>
  );
}
