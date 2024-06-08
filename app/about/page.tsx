import AppHeader from "@/app/ui/appHeader";
import styles from "./Page.module.css"
import Footer from "@/app/ui/footer";
import React from "react";

export default function about() {
    const companyMap: Map<String, String> = new Map([
        ['会社名', '有限会社　三重クレーン'],
        ['設立', '1993年3月'],
        ['資本金', '300万円'],
        ['従業員数', '5人'],
        ['所在地', '〒879-7102　大分県豊後大野市三重町菅生１ー９']
    ])
    const historyMap: Map<String, String> = new Map([
        ['1993年  3月', '有限会社  三重クレーンをを個人事業主として創業'],
        ['2006年  2月', '有限会社 三重クレーンを設立'],
        ['2020年  4月', '本店住所を豊後大野市三重町菅生1-9へ移転']
    ])

    return (
        <main>
            <AppHeader></AppHeader>
            <section className={styles.aboutSection}>
                <h2 className={'TabHeader'}><span className={'TabIcon'}>⚫︎</span>会社概要</h2>
                {aboutTableView(companyMap)}
            </section>
            <Footer></Footer>
        </main>
    )
}

function aboutTableView(map: Map<String, String>){
    const list: React.JSX.Element[] = []
    map.forEach((value, key) =>
        list.push(
            <div>
                <div>{key}</div>
                <div>{value}</div>
            </div>
        )
    )
    return list
}