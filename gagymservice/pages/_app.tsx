import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/bootstrap-custom.scss";
import "../styles/font.css";
import { store } from "../provider";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
