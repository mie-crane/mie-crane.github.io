import AppHeader from "@/app/ui/appHeader";
import Footer from "@/app/ui/footer";
import styles from "./Page.module.css"
import {Crane} from "@/app/data/Crane";
import Image from "next/image";

export default function craneList() {
    const cranes: Crane[] =
        [
            new Crane(
                "70tラフタークレーン",
                "GRｰ700Nｰ2",
                "70t",
                "44,0m",
                "17,7m",
                "約45,2m(ブーム)\n約63,0m(ジブ)",
                "約40,0m(ブーム前方) \n36,0m(標準) \n約46,9m(ジブ前方)\n40,8m(標準)",
                "1台"
            ),
            new Crane(
                "25tラフタークレーン",
                "GRｰ250Nｰ5 等",
                "25t",
                "30,5m",
                "13,0m",
                "",
                "",
                "3台"
            ),
            new Crane(
                "13tラフタークレーン",
                "KRMｰ13HｰF 等",
                "13t",
                "24.0m",
                "5.5m",
                "",
                "",
                "4台"
            )
        ]

    return (
        <main>
            <AppHeader></AppHeader>
            <section className={styles.craneListSection}>
                <h2 className={styles.sectionTitle}>保有車両</h2>
                <div className={styles.craneImagesSection}>
                    <div className={styles.craneImageWrapper}>
                        <Image 
                            className={styles.craneImage} 
                            src="/70t.jpg" 
                            alt="70tクレーン"
                            width={600} 
                            height={400}
                            sizes="(max-width: 768px) 100vw, 45vw"
                        />
                        <div className={styles.imageCaption}>70tラフタークレーン</div>
                    </div>
                    <div className={styles.craneImageWrapper}>
                        <Image 
                            className={styles.craneImage} 
                            src="/25t.jpg" 
                            alt="25tクレーン"
                            width={600} 
                            height={400}
                            sizes="(max-width: 768px) 100vw, 45vw"
                        />
                        <div className={styles.imageCaption}>25tラフタークレーン</div>
                    </div>
                </div>
                { createCraneTableView(cranes) }
            </section>
            <Footer></Footer>
        </main>
    )
}


function createCraneTableView(cranes: Crane[]) {
    let headerNames = ["No", "型式", "吊上荷重", "ブーム", "ジブ", "最大地上揚程", "最大作業半径", "台数"]
    let header = headerNames.map((item, index) => <th key={index}>{item}</th>)
    let data = cranes.map((crane, index) =>
        <tr key={index}>
             <td className={styles.tableDetailData}>{String(index + 1).padStart(2, '0')}</td>
            {crane.values().slice(1, 8).map((value, index) =>
                <td className={styles.tableDetailData} key={index}>{value || '-'}</td>
            )}
        </tr>
    )
    return (
        <table className={styles.detailTable}>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </table>
    )
}


