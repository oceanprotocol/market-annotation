import React, { ReactElement } from 'react'
import Home from '../components/Home'
import Seo from '@shared/Page/Seo'
import { useRouter } from 'next/router'
import { useMarketMetadata } from '@context/MarketMetadata'

export default function PageHome(): ReactElement {
  const { siteContent } = useMarketMetadata()
  const router = useRouter()

  return (
    <>
      <Seo
        title={siteContent?.siteTitle}
        description={siteContent?.siteTagline}
        uri={router.route}
      />
      <Home />
    </>
  )
}
