import AppHeader from "@/app/ui/appHeader";
import Image from "next/image";
import styles from './Page.module.css';
import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <AppHeader></AppHeader>
            <Image src="/crane.png"  alt="クレーン" width={1366} height={726}
                   sizes="100vw"
                   style={{
                       width: '100%',
                       height: 'auto',
                   }}
            />
            <section className={styles.informationSection}>
                <div className={styles.informationArea}>
                    <p className={styles.informationText}>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                    </p>
                    <Link href={'/about'} className={styles.informationButton}>会社案内はこちら&nbsp;<span className={styles.informationIcon}>▶</span>︎</Link>
                </div>
            </section>
            <section className={styles.craneListSection}>
                <div className={styles.craneListArea}>
                    <Image className={styles.craneListImage} src={"/70t.jpg"} alt={"70tラフタークレーン"} width={400}
                           height={300}/>
                    <Image className={styles.craneListImage} src={"/25t.jpg"} alt={"25tラフタークレーン"} width={400}
                           height={300}/>
                    <Image className={styles.craneListImage} src={"/13t.jpg"} alt={"13tラフタークレーン"} width={400}
                           height={300}/>
                </div>
                <div className={styles.craneButtonDiv}>
                    <Link href={'/craneList'} className={styles.informationButton}>保有車両はこちら&nbsp;<span className={styles.informationIcon}>▶</span>︎</Link>
                </div>
            </section>
            <div className={styles.contactAndRecruit}>
                <section className={styles.contactSection}>
                    <h3 className={styles.subTitle}>お問い合わせ</h3>
                    <Image className={styles.recruitIcon} src={'/mail.png'} alt={'メールアイコン'} width={296} height={190} />
                    <p className={styles.contactMainText}>0974-22-3881</p>
                    <p className={styles.contactAndRecruitSubText}>お気軽にお問い合わせください</p>
                    <div className={styles.inlineBlock}>
                        <Link className={styles.transparentButton} href='tel:0974-22-1632'>電話をかける（スマホのみ）</Link>
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