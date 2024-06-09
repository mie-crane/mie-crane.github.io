import Link from "next/link";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <h1><Link href='home' className="first-item">有限会社 三重クレーン</Link></h1>
            <nav aria-labelledby="aria-nav">
                <ul>
                    <Link href='/home' className="nav-link">ホーム</Link>
                    <Link href='/craneList' className="nav-link">保有車両</Link>
                    <Link href='/about' className="nav-link">会社案内</Link>
                    <Link href='/performance' className="nav-link">会社実績</Link>
                    {/*<Link href='/recruit' className="nav-link">採用情報</Link>*/}
                    <Link href='/contact' className={`${"nav-link"} ${styles.contact}`}>お問い合わせ</Link>
                    </ul>
            </nav>
        </header>
    )
}