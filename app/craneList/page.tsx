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
                "24,0m",
                "5,5m",
                "",
                "",
                "4台"
            )
        ]

    return (
        <main>
            <AppHeader></AppHeader>
            <section className={styles.craneListSection}>
                <h2 className={'TabHeader'}><span className={'TabIcon'}>⚫︎</span>保有車両</h2>
                { createCraneListView(cranes) }
            </section>
            <section className={styles.craneListSection}>
                <h2 className={'TabHeader'}><span className={'TabIcon'}>⚫︎</span>車両詳細表</h2>
                { createCraneTableView(cranes) }
            </section>
            <Footer></Footer>
        </main>
    )
}

function createCraneListView(cranes: Crane[]) {
    return (
        cranes.map((crane, index) => {
                return (
                    <div className={styles.craneItem} key={index}>
                        <h3><span className={styles.index}>{index}</span>{crane.displayName}</h3>
                        <div className={styles.childCraneItem}>
                            <Image className={styles.craneImage} src="/70t.png" alt="70tクレーン" width={400} height={280}></Image>
                            <div className={styles.craneInfoTableBackground}>
                                <table className={styles.craneTable}>
                                    <tbody>
                                    <tr>
                                        <th className={styles.tableHeader}>型式</th>
                                        <td className={styles.tableData}>{crane.displayName}</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.tableHeader}>吊上荷重</th>
                                        <td className={styles.tableData}>{crane.liftWeight}</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.tableHeader}>ブーム長</th>
                                        <td className={styles.tableData}>{crane.boomLength}</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.tableHeader}>台数</th>
                                        <td className={styles.tableData}>{crane.units}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        )
    )
}

function createCraneTableView(cranes: Crane[]) {
    let headerNames = ["No", "型式", "吊上荷重", "ブーム", "ジブ", "最大地上揚程", "最大作業半径", "台数"]
    let header = headerNames.map((item, index) => <th key={index} className={styles.tableHeader}>{item}</th>)
    let data = cranes.map((crane, index) =>
        <tr key={index}>
             <td className={styles.tableDetailData}>0{index+1}</td>
            {crane.values().slice(1, 8).map((value, index) =>
                <td className={styles.tableDetailData} key={index}>{value}</td>
            )}
        </tr>
    )
    return (
        <table>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </table>
    )
}


