import '~/styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))
const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps

  const content = (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )

  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>{content}</PreviewProvider>
      ) : (
        content
      )}
    </>
  )
}
