import React, { ReactElement } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

export default function CallToAction(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/images/home/cta-background.png"
          alt=""
          fill
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            <span className={styles.titleNormal}>Not sure how to</span>
            <span className={styles.titleHighlight}>start training</span>
            <span className={styles.titleNormal}>your model ?</span>
          </h2>

          <button className={styles.ctaButton}>
            <span>Start here</span>
            <Image
              src="/images/home/chevron-down.svg"
              alt=""
              width={20}
              height={20}
              className={styles.chevron}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
