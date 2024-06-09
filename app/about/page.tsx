import AppHeader from "@/app/ui/appHeader";
import styles from "./Page.module.css"
import Footer from "@/app/ui/footer";
import React from "react";
import {func} from "prop-types";

export default function about() {
    const companyMap: Map<String, String> = new Map([
        ['会社名', '有限会社　三重クレーン'],
        ['設立', '1993年3月'],
        ['資本金', '300万円'],
        ['従業員数', '9人'],
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
            <section className={styles.aboutSection}>
                <h2 className={'TabHeader'}><span className={'TabIcon'}>⚫︎</span>沿革</h2>
                {historyGridView(historyMap)}
            </section>
            <section className={styles.aboutSection}>
                <h2 className={'TabHeader'}><span className={'TabIcon'}>⚫︎</span>アクセス</h2>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.14142029124645!2d131.61865880028913!3d32.99889044839935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f70.1!3m3!1m2!1s0x35469541dc77af07%3A0x195e4f2546bdd714!2z5pyJ6ZmQ5Lya56S-IOS4iemHjeOCr-ODrOODvOODsw!5e0!3m2!1sja!2sjp!4v1717915685298!5m2!1sja!2sjp"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}

function aboutTableView(map: Map<String, String>) {
    const list: React.JSX.Element[] = []
    map.forEach((value, key) =>
        list.push(
            <div className={styles.grid}>
                <div className={styles.gridKey}><span className={styles.circle}>{key}</span></div>
                <div className={styles.gridValue}>{value}</div>
            </div>
        )
    )
    return list
}

function historyGridView(map: Map<String, String>){
    const list: React.JSX.Element[] = []
    map.forEach((value, key) =>
        list.push(
            <div className={styles.grid}>
                <div className={styles.historyKey}><span className={styles.historyCircle}>{key}</span></div>
                <div className={styles.historyValue}>{value}</div>
            </div>
        )
    )
    return list
}