import AppHeader from "@/app/ui/appHeader";
import styles from "./Page.module.css"
import Footer from "@/app/ui/footer";

export default function about() {
    const companyMap: Map<string, string> = new Map([
        ['会社名', '有限会社　三重クレーン'],
        ['設立', '1993年3月'],
        ['資本金', '300万円'],
        ['従業員数', '9人'],
        ['所在地', '〒879-7102　大分県豊後大野市三重町菅生１ー９']
    ])
    const historyMap: Map<string, string> = new Map([
        ['1993年  3月', '個人事業主として三重クレーンを創業'],
        ['2006年  2月', '有限会社 三重クレーンを設立'],
        ['2020年  4月', '本店住所を豊後大野市三重町菅生1-9へ移転']
    ])

    return (
        <main>
            <AppHeader></AppHeader>
            <div className={styles.aboutContainer}>
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>会社概要</h2>
                    <div className={styles.companyInfo}>
                        {aboutTableView(companyMap)}
                    </div>
                </section>
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>沿革</h2>
                    <div className={styles.historyInfo}>
                        {historyGridView(historyMap)}
                    </div>
                </section>
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>アクセス</h2>
                    <div className={styles.mapContainer}>
                        <iframe
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.14142029124645!2d131.61865880028913!3d32.99889044839935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f70.1!3m3!1m2!1s0x35469541dc77af07%3A0x195e4f2546bdd714!2z5pyJ6ZmQ5Lya56S-IOS4iemHjeOCr-ODrOODsw!5e0!3m2!1sja!2sjp!4v1717915685298!5m2!1sja!2sjp"
                            width="100%" height="450" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </main>
    )
}

function aboutTableView(map: Map<string, string>) {
    const list: React.JSX.Element[] = []
    let index = 0;
    map.forEach((value, key) =>
        list.push(
            <div key={index++} className={styles.grid}>
                <div className={styles.gridKey}>{key}</div>
                <div className={styles.gridValue}>{value}</div>
            </div>
        )
    )
    return list
}

function historyGridView(map: Map<string, string>){
    const list: React.JSX.Element[] = []
    let index = 0;
    map.forEach((value, key) =>
        list.push(
            <div key={index++} className={styles.grid}>
                <div className={styles.historyKey}>{key}</div>
                <div className={styles.historyValue}>{value}</div>
            </div>
        )
    )
    return list
}