import 'yaml-loader';
import { appWithTranslation } from 'next-i18next';
import i18next from 'i18next';

import 'eva-icons/style/eva-icons.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
