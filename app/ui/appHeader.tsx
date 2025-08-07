'use client';

import Link from "next/link";
import styles from "./AppHeader.module.css";
import { useState, useEffect } from "react";

export default function AppHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <Link href='/home' className={styles.logo}>
                    有限会社 三重クレーン
                </Link>
                <nav className={styles.wideNav} aria-label="メインナビゲーション">
                    <ul className={styles.ul}>
                        <li><Link href='/home' className={styles.navLink}>ホーム</Link></li>
                        <li><Link href='/craneList' className={styles.navLink}>保有車両</Link></li>
                        <li><Link href='/about' className={styles.navLink}>会社案内</Link></li>
                        {/*<li><Link href='/performance' className={styles.navLink}>会社実績</Link></li>*/}
                        {/*<li><Link href='/recruit' className={styles.navLink}>採用情報</Link></li>*/}
                        <li><Link href='/contact' className={styles.contact}>お問い合わせ</Link></li>
                    </ul>
                </nav>
                <button 
                    className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="メニューを開く"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className={styles.hamburger}></span>
                </button>
            </header>
            <nav className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li><Link href='/home' className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>ホーム</Link></li>
                    <li><Link href='/craneList' className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>保有車両</Link></li>
                    <li><Link href='/about' className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>会社案内</Link></li>
                    {/*<li><Link href='/performance' className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>会社実績</Link></li>*/}
                    {/*<li><Link href='/recruit' className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>採用情報</Link></li>*/}
                    <li><Link href='/contact' className={styles.mobileContact} onClick={() => setMobileMenuOpen(false)}>お問い合わせ</Link></li>
                </ul>
            </nav>
        </>
    )
}