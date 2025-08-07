import AppHeader from "@/app/ui/appHeader";
import Image from "next/image";
import styles from './Page.module.css';
import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <AppHeader></AppHeader>
            <section className={styles.heroSection}>
                <Image 
                    src="/crane.png"  
                    alt="クレーン" 
                    width={800} 
                    height={400}
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>安全と信頼のクレーンサービス</h1>
                    <p className={styles.heroSubtitle}>三重クレーンは、確かな技術と経験でお客様のニーズにお応えします</p>
                    <Link href='/contact' className={styles.heroButton}>
                        お問い合わせはこちら
                        <span className={styles.informationIcon}>→</span>
                    </Link>
                </div>
            </section>
            <section className={styles.informationSection}>
                <div className={styles.informationArea}>
                    <p className={styles.informationText}>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                    </p>
                    <Link href={'/about'} className={styles.informationButton}>会社案内はこちら&nbsp;<span className={styles.informationIcon}>▶</span>︎</Link>
                </div>
            </section>
            <section className={styles.craneListSection}>
                <h2 className={styles.craneListTitle}>保有車両一覧</h2>
                <div className={styles.craneListArea}>
                    <div className={styles.craneCard}>
                        <Image className={styles.craneListImage} src={"/70t.jpg"} alt={"70tラフタークレーン"} width={400}
                               height={300}/>
                        <div className={styles.craneInfo}>
                            <p className={styles.craneName}>70tラフタークレーン</p>
                        </div>
                    </div>
                    <div className={styles.craneCard}>
                        <Image className={styles.craneListImage} src={"/25t.jpg"} alt={"25tラフタークレーン"} width={400}
                               height={300}/>
                        <div className={styles.craneInfo}>
                            <p className={styles.craneName}>25tラフタークレーン</p>
                        </div>
                    </div>
                    <div className={styles.craneCard}>
                        <Image className={styles.craneListImage} src={"/13t.jpg"} alt={"13tラフタークレーン"} width={400}
                               height={300}/>
                        <div className={styles.craneInfo}>
                            <p className={styles.craneName}>13tラフタークレーン</p>
                        </div>
                    </div>
                </div>
                <div className={styles.craneButtonDiv}>
                    <Link href={'/craneList'} className={styles.informationButton}>保有車両はこちら&nbsp;<span className={styles.informationIcon}>▶</span>︎</Link>
                </div>
            </section>
            <div className={styles.contactAndRecruit}>
                <section className={styles.contactSection}>
                    <div className={styles.contactContent}>
                        <h3 className={styles.subTitle}>お問い合わせ</h3>
                        <Image className={styles.contactIcon} src={'/mail.png'} alt={'メールアイコン'} width={296} height={190} />
                        <p className={styles.contactMainText}>0974-22-3881</p>
                        <p className={styles.contactAndRecruitSubText}>お気軽にお問い合わせください</p>
                        <div className={styles.inlineBlock}>
                            <Link className={styles.transparentButton} href='tel:0974-22-3881'>電話をかける</Link>
                        </div>
                    </div>
                </section>
                {/*<section className={styles.recruitSection}>*/}
                {/*    <h3 className={styles.subTitle}>採用情報</h3>*/}
                {/*    <Image className={styles.recruitIcon} src={'/recruit.png'} alt={'採用情報アイコン'} width={296} height={190} />*/}
                {/*    <p className={styles.recruitSubText}>私たちとやりがいのある仕事をしてみませんか？<br/>皆さんのご応募をお待ちしております。</p>*/}
                {/*    <button className={`${styles.transparentButton} ${styles.recruitButton}`}>採用情報はこちら</button>*/}
                {/*</section>*/}
            </div>
            <Footer></Footer>
        </main>
    )
}