import Link from "next/link";
import styles from "./Footer.module.css"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.flexbox}>
                    <div className={styles.companyInfo}>
                        <h4 className={styles.footerTitle}>有限会社 三重クレーン</h4>
                        <p className={styles.companyTagline}>
                            安全と信頼のクレーンサービス
                        </p>
                    </div>
                    
                    <nav className={styles.navSection} aria-label="フッターナビゲーション">
                        <h5 className={styles.navTitle}>サイトマップ</h5>
                        <ul className={styles.navArea}>
                            <li><Link href='/home' className={styles.navLink}>ホーム</Link></li>
                            <li><Link href='/craneList' className={styles.navLink}>保有車両</Link></li>
                            <li><Link href='/about' className={styles.navLink}>会社案内</Link></li>
                            {/*<li><Link href='/performance' className={styles.navLink}>会社実績</Link></li>*/}
                            {/*<li><Link href='/recruit' className={styles.navLink}>採用情報</Link></li>*/}
                            <li><Link href='/contact' className={styles.navLink}>お問い合わせ</Link></li>
                        </ul>
                    </nav>
                    
                    <div className={styles.contactSection}>
                        <h5 className={styles.contactTitle}>お問い合わせ</h5>
                        <address className={styles.address}>
                            〒879-7102<br/>
                            大分県豊後大野市三重町菅生1-9
                        </address>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                                <span>TEL: 0974-22-3881</span>
                            </div>
                            <div className={styles.contactItem}>
                                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"/>
                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
                                </svg>
                                <span>FAX: 0974-22-3881</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.divider}></div>
                
                <p className={styles.copyright}>
                    &copy; {currentYear} 有限会社 三重クレーン. All rights reserved.
                </p>
            </div>
        </footer>
    )
}