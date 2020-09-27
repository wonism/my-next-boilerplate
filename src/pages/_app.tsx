import React, { ErrorInfo } from 'react';
import NextApp from 'next/app';
import { RecoilRoot } from 'recoil';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import { globalStyles } from '@constants/styles';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

export default class App extends NextApp {
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error);

    super.componentDidCatch(error, errorInfo);
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <RecoilRoot>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </RecoilRoot>
    );
  }
}
