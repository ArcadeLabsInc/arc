import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useMemo } from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import { trpc } from 'app/utils/trpc.web'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Arc</title>
        <meta name="description" content="Connect freely." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeAndAuthProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </ThemeAndAuthProvider>
    </>
  )
}

function ThemeAndAuthProvider({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: any
}) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider onChangeTheme={setTheme}>
      <Provider
        disableRootThemeClass
        defaultTheme={theme}
        pageProps={pageProps}
      >
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default trpc.withTRPC(MyApp)
