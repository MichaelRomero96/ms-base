import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ReduxProvider from '../components/providers/ReduxProviders'
import AuthProvider from '../components/providers/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return <ReduxProvider>
    <AuthProvider>
      <Component {...pageProps} />
      <Layout />
    </AuthProvider>
  </ReduxProvider>
}

export default MyApp
