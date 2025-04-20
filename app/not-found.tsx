import Link from "next/link";
import '../styles/common.css';
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Image src="/404.png" alt="Austronaut mit 404 Seite nicht gefunden" height="1029" width="607" style={{height: "60%", width:"auto"}}/>
      <div style={{height: 30}}></div>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
};

export default NotFoundPage;
