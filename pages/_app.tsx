import ToastCenter from 'views/ToastCenter'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import 'styles/globals.scss'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NEXTJS Boilerplate 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ToastCenter />
          <Component {...pageProps} />
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
