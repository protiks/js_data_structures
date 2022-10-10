import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import type { AppProps } from 'next/app'
import '../styles/globals.css'

interface Props {

}
const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
