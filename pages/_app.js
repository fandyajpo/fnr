import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "lib/context";
import { orderPrice } from "lib/redux";
function MyApp({ Component, pageProps }) {
  store.dispatch(orderPrice());
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
