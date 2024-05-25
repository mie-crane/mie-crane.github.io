import AppHeader from "@/app/ui/appHeader";
import Footer from "@/app/ui/footer";
import styles from "./Page.module.css"
import {Crane} from "@/app/data/Crane";
import React from "react";
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
                1
            ),
            new Crane(
                "25tラフタークレーン",
                "GRｰ250Nｰ5 等",
                "25t",
                "30,5m",
                "13,0m",
                "",
                "",
                3
            ),
            new Crane(
                "13tラフタークレーン",
                "KRMｰ13HｰF 等",
                "13t",
                "24,0m",
                "5,5m",
                "",
                "",
                4
            )
        ]

    return (
        <main>
            <AppHeader></AppHeader>
            <section className={styles.craneListSection}>
                <h2 className={styles.craneListHeader}><span className={styles.craneListIcon}>⚫︎</span>保有車両</h2>
                { createCraneListView(cranes) }
            </section>
            <section className={styles.craneListSection}>
                <h2 className={styles.craneListHeader}><span className={styles.craneListIcon}>⚫︎</span>車両詳細表</h2>
                { createCraneTableView(cranes) }
            </section>
            <Footer></Footer>
        </main>
    )
}

export function createCraneListView(cranes: Crane[]) {
    return (
        cranes.map((crane, index) => {
                return (
                    <div className={styles.craneItem} key={index}>
                        <h3><span className={styles.index}>{index}</span>{crane.displayName}</h3>
                        <div className={styles.childCraneItem}>
                            <Image className={styles.craneImage} src="/70t.png" alt="70tクレーン" width={500} height={350}></Image>
                            <div className={styles.craneInfoTable}></div>
                        </div>
                    </div>
                )
            }
        )
    )
}

export function createCraneTableView(cranes: Crane[]) {
    return (
        cranes.map((crane, index) => {
            return (
                <div className={styles.craneItem} key={index}></div>
            )
        })
    )
}


