import React, { ReactElement } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

interface Dataset {
  id: number
  title: string
  description: string
  image: string
  rating: number
  price: string
  sales: string
}

const datasets: Dataset[] = [
  {
    id: 1,
    title: 'Ocean CEX Aggregator: ETH/USDT',
    description:
      "This data feed returns ETH/USDT ohlc history. It's a free feed into: htt...",
    image: '/images/home/dataset-1.png',
    rating: 5,
    price: 'Free',
    sales: '50 sales'
  },
  {
    id: 2,
    title: 'Image Processing Algorithm V2',
    description: 'Image Processing Algorithm',
    image: '/images/home/dataset-2.png',
    rating: 5,
    price: 'Free',
    sales: '50 sales'
  },
  {
    id: 3,
    title: 'Global GHG Emissions Data Set by Country',
    description:
      "This is 2 of 2 data sets on Polygon used to conduct the 'Forecasting...",
    image: '/images/home/dataset-3.png',
    rating: 5,
    price: 'Free',
    sales: '50 sales'
  },
  {
    id: 4,
    title: 'Face Detection Algorithm V5',
    description: 'Face Detection Algorithm V5',
    image: '/images/home/dataset-4.png',
    rating: 5,
    price: 'Free',
    sales: '50 sales'
  }
]

function DatasetCard({ dataset }: { dataset: Dataset }): ReactElement {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={dataset.image}
          alt={dataset.title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{dataset.title}</h3>

        <div className={styles.cardInfo}>
          <div className={styles.cardDetails}>
            <div className={styles.stars}>
              {[...Array(dataset.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/home/star-icon.svg"
                  alt="Star"
                  width={18}
                  height={18}
                />
              ))}
            </div>

            <p className={styles.cardDescription}>{dataset.description}</p>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.cardMeta}>
              <span className={styles.price}>{dataset.price}</span>
              <span className={styles.sales}>{dataset.sales}</span>
            </div>

            <button className={styles.moreButton}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="5" r="1.5" fill="white" />
                <circle cx="11" cy="11" r="1.5" fill="white" />
                <circle cx="11" cy="17" r="1.5" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DatasetShowcase(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore our datasets</h2>

        <div className={styles.grid}>
          {datasets.map((dataset) => (
            <DatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </div>

        <button className={styles.loadMoreButton}>
          <span>Load more datasets</span>
          <Image
            src="/images/home/chevron-down.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>
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
          width={167}
          height={167}
          className={styles.lightning2}
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
