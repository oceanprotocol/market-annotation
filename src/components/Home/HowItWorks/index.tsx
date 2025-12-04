import React, { ReactElement } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

interface Step {
  number: string
  title: string
  description: string
  isHighlighted: boolean
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Pick a dataset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut vehicula sem. Phasellus tincidunt, quam non pharetra tristique.',
    isHighlighted: false
  },
  {
    number: '02',
    title: 'Connect to Ocean',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut  vehicula sem. Phasellus tincidunt, quam non pharetra tristique, metus  justo euismod ligula, ut hendrerit dolor velit sed neque. Pellentesque  auctor sit amet nunc in porttitor. Nam in tellus arcu. Donec ut sodales  libero, ut gravida lectus. Mauris quis neque turpis.',
    isHighlighted: true
  },
  {
    number: '03',
    title: 'Train your AI Models',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut vehicula sem.',
    isHighlighted: false
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut vehicula sem.',
    isHighlighted: false
  }
]

export default function HowItWorks(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>How it works</h2>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.step} ${
                  step.isHighlighted ? styles.stepHighlighted : ''
                }`}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/home/how-it-works.svg"
            alt="How it works illustration"
            width={624}
            height={680}
            className={styles.illustration}
          />
        </div>
      </div>

      <div className={styles.decorations}>
        <Image
          src="/images/home/lightning-icon.svg"
          alt=""
          width={167}
          height={167}
          className={styles.lightning1}
        />
        <Image
          src="/images/home/lightning-icon.svg"
          alt=""
          width={92}
          height={92}
          className={styles.lightning2}
        />
        <Image
          src="/images/home/lightning-icon.svg"
          alt=""
          width={157}
          height={157}
          className={styles.lightning3}
        />
        <Image
          src="/images/home/star-icon.svg"
          alt=""
          width={253}
          height={253}
          className={styles.star1}
        />
        <Image
          src="/images/home/star-icon.svg"
          alt=""
          width={277}
          height={277}
          className={styles.star2}
        />
      </div>
    </section>
  )
}
