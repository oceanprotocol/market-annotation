import React, { ReactElement, useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import Button from '@shared/atoms/Button'

export default function Hero(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/home/hero-background.png"
          alt="Hero background"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/images/home/screenshot-app.png"
              alt="Ocean Protocol"
              width={86}
              height={88}
            />
          </div>

          <nav className={styles.nav}>
            <a href="#" className={styles.navLinkActive}>
              Publish
            </a>
            <a href="/profile" className={styles.navLink}>
              Profile
            </a>
            <a href="#" className={styles.navLink}>
              Networks
            </a>
            <a href="#" className={styles.navLink}>
              Services
            </a>
          </nav>

          <div className={styles.headerActions}>
            <Button className={styles.connectButton}>Connect Wallet</Button>
            <button
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={mobileMenuOpen ? styles.hamburgerOpen : ''}
              ></span>
              <span
                className={mobileMenuOpen ? styles.hamburgerOpen : ''}
              ></span>
              <span
                className={mobileMenuOpen ? styles.hamburgerOpen : ''}
              ></span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className={styles.mobileMenu}>
            <a href="#" className={styles.mobileNavLinkActive}>
              Publish
            </a>
            <a href="/profile" className={styles.mobileNavLink}>
              Profile
            </a>
            <a href="#" className={styles.mobileNavLink}>
              Networks
            </a>
            <a href="#" className={styles.mobileNavLink}>
              Services
            </a>
          </nav>
        )}

        <div className={styles.heroMain}>
          <h1 className={styles.title}>A new way to train your AI models</h1>

          <div className={styles.heroActions}>
            <p className={styles.subtitle}>Smarter. Faster. Easier.</p>

            <Button className={styles.ctaButton}>
              <Image
                src="/images/home/grid-icon.svg"
                alt=""
                width={24}
                height={24}
              />
              EXPLORE DATASETS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
