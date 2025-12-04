import React, { ReactElement } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

export default function NewFooter(): ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/home/footer-logo.svg"
            alt="Ocean Protocol"
            width={298}
            height={208}
          />
        </div>

        <div className={styles.menus}>
          <div className={styles.menuUpper}>
            <div className={styles.col1}>
              <nav className={styles.links}>
                <a href="/" className={styles.link}>
                  Homepage
                </a>
                <a href="/about" className={styles.link}>
                  About
                </a>
                <a href="/search" className={styles.link}>
                  Our Datasets
                </a>
                <a href="/contact" className={styles.link}>
                  Contact
                </a>
              </nav>
            </div>

            <div className={styles.col2}>
              <a href="mailto:hello@email.com" className={styles.email}>
                hello@email.com
              </a>
            </div>
          </div>

          <div className={styles.menuLower}>
            <div className={styles.lowerCol1}>
              <nav className={styles.links}>
                <a href="/imprint" className={styles.link}>
                  Imprint
                </a>
                <a href="/terms" className={styles.link}>
                  Terms
                </a>
                <a href="/privacy" className={styles.link}>
                  Privacy
                </a>
              </nav>
            </div>

            <div className={styles.lowerCol2}>
              <div className={styles.socialIcons}>
                <Image
                  src="/images/home/social-icons.svg"
                  alt="Social media links"
                  width={328}
                  height={104}
                />
              </div>
            </div>

            <div className={styles.lowerCol3}>
              <div className={styles.copyright}>
                <p>© {currentYear} All Rights Reserved.</p>
                <p>Powered by Labelz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
