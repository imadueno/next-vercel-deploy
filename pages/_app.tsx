import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";

/**
 * NextPage requiere agregar la propiedad getLayout
 * en caso de que se encuentre
 */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

/**
 * AppProps necesita comunicar que Component tiene un nuevo
 * tipado para ceptar nuevos valores
 */
type NextPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: NextPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
