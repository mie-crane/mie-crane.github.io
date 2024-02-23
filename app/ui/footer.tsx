import Link from "next/link";
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.flexbox}>
                <h4 className={styles.footerTitle}>三重クレーン</h4>
                <nav aria-labelledby="aria-nav">
                    <ul className={styles.navArea}>
                        <Link href='/home' className="nav-link">ホーム</Link>
                        <Link href='/craneList' className="nav-link">保有車両</Link>
                        <Link href='/about' className="nav-link">会社案内</Link>
                        <Link href='/performance' className="nav-link">会社実績</Link>
                        <Link href='/recruit' className="nav-link">採用情報</Link>
                        <Link href='/contact' className="nav-link">お問い合わせ</Link>
                    </ul>
                </nav>
            </section>
            <section className={styles.address}>
                <p>〒879-7102 　大分県豊後大野市三重町菅生１ー９<br/>TEL・FAX  0974-22-3881　定休日/不定休　営業時間</p>
            </section>
    </footer>
    )
}