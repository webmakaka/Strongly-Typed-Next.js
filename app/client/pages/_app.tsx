import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { themeDark, themeLight } from 'lib/theme';
import React, { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyes = document.querySelector('#jss-server-side');
    if (jssStyes && jssStyes.parentNode) {
      jssStyes.parentNode.removeChild(jssStyes);
    }
  }, []);
  
  return (
    <ThemeProvider theme={false ? themeDark : themeLight}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
