import AppHeader from "@/app/ui/appHeader";
import Footer from "@/app/ui/footer";
import styles from "./Contact.module.css";
import Link from "next/link";

export default function contact() {
    return (
        <main>
            <AppHeader />
            <div className={styles.contactPage}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>お問い合わせ</h1>
                    
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                                📞
                            </div>
                            <h2 className={styles.contactTitle}>お問い合わせ</h2>
                            <p className={styles.contactInfo}>0974-22-3881</p>
                            <p className={styles.contactDescription}>
                                お電話・FAX共に同じ番号です。お気軽にお問い合わせください。<br/>
                            </p>
                            <Link href="tel:0974-22-3881" className={styles.contactButton}>
                                📞 電話をかける
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.mapSection}>
                        <h2 className={styles.mapTitle}>営業時間・所在地</h2>
                        
                        <div className={styles.businessHours}>
                            <div className={styles.hoursCard}>
                                <h4 className={styles.hoursTitle}>営業時間</h4>
                                <p className={styles.hoursText}>平日 8:00 - 17:00</p>
                            </div>
                            <div className={styles.hoursCard}>
                                <h4 className={styles.hoursTitle}>休業日</h4>
                                <p className={styles.hoursText}>日曜・祝日</p>
                            </div>
                        </div>
                        
                        <div className={styles.addressInfo}>
                            <h3 className={styles.addressTitle}>所在地</h3>
                            <p className={styles.addressText}>
                                〒879-7102<br/>
                                大分県豊後大野市三重町菅生1-9
                            </p>
                            <p className={styles.companyLink}>
                                詳しい会社情報は<Link href="/about" className={styles.aboutLink}>会社案内ページ</Link>をご覧ください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}