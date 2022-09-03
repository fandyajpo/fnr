import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "lib/context";
import { orderPrice } from "rdx/bagStorage";
function MyApp({ Component, pageProps }) {
  store.dispatch(orderPrice());
  //LAYOUT
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
