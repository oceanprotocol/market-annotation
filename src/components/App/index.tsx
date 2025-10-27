import React, { ReactElement } from 'react'
import Alert from '@shared/atoms/Alert'
import Footer from '../Footer/Footer'
import Header from '../Header'
import { useAccountPurgatory } from '@hooks/useAccountPurgatory'
import AnnouncementBanner from '@shared/AnnouncementBanner'
import PrivacyPreferenceCenter from '../Privacy/PrivacyPreferenceCenter'
import styles from './index.module.css'
import { ToastContainer } from 'react-toastify'
import contentPurgatory from '../../../content/purgatory.json'
import { useMarketMetadata } from '@context/MarketMetadata'
import { useAppKitAccount } from '@reown/appkit/react'
import { useRouter } from 'next/router'

export default function App({
  children
}: {
  children: ReactElement
}): ReactElement {
  const { siteContent, appConfig } = useMarketMetadata()
  const { address } = useAppKitAccount()
  const { isInPurgatory, purgatoryData } = useAccountPurgatory(address)
  const router = useRouter()

  const isHomePage = router.pathname === '/'

  return (
    <div className={`${styles.app} ${isHomePage ? styles.homePage : ''}`}>
      {siteContent?.announcement !== '' && (
        <AnnouncementBanner text={siteContent?.announcement} />
      )}
      {!isHomePage && <Header />}

      {isInPurgatory && (
        <Alert
          title={contentPurgatory.account.title}
          badge={`Reason: ${purgatoryData?.reason}`}
          text={contentPurgatory.account.description}
          state="error"
        />
      )}
      <main className={styles.main}>{children}</main>
      {!isHomePage && <Footer />}

      {appConfig?.privacyPreferenceCenter === 'true' && (
        <PrivacyPreferenceCenter style="small" />
      )}

      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  )
}
