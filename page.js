import Image from "next/image";
import styles from "./page.module.css";
import Contador from "@/components/Contador/Contador";
import Mensagem from "@/components/Mensagem/Mensagem";
import  PageProduto from "@/app/produto"


export default function Home() {
  return (
    <div className={styles.page}>

        <Contador />
        <Mensagem  nome ="Junir"/>
        <PageProduto />

    </div>
  );
}
