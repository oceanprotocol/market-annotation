import React, { ReactElement } from 'react'
import Hero from './Hero'
import DatasetShowcase from './DatasetShowcase'
import HowItWorks from './HowItWorks'
import CallToAction from './CallToAction'
import NewFooter from './NewFooter'
import styles from './index.module.css'

export default function HomePage(): ReactElement {
  return (
    <div className={styles.homepage}>
      <Hero />
      <HowItWorks />
      <DatasetShowcase />
      <CallToAction />
      <NewFooter />
    </div>
  )
}
