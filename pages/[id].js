import React from "react";
import Category from "components/Category";
import Layout from "components/Layout/Layout";
import Product from "components/Product/Product";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { initStorate } from "rdx/productStorage";
import { Loading } from "lib/listSvg";

// export async function getServerSideProps({ res, req }) {
//   const Fetcher = await fetch(
//     "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
//   );

//   const result = await Fetcher.json();
//   const product = result.shoes;
//   return {
//     props: {
//       product,
//     },
//   };
// }

const Home = () => {
  const dispatch = useDispatch();
  const { stores } = useSelector((state) => state.stores);
  const [isFetch, setIsFetch] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const Cat = React.useCallback(() => {
    if (id === "all") return "New Release";
    if (id === "men") return "Men";
    if (id === "sport") return "Sporty";
    if (id === "kids") return "Kids";
    if (id === "custom") return "Customize";
  }, [id]);

  const sFetch = async () => {
    setIsFetch(true);
    const Fetcher = await fetch(
      "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
    );
    const result = await Fetcher.json();
    const jsonRes = result.shoes.map((pd, id) => Object.assign(pd, { id: id }));
    Promise.all([dispatch(initStorate(jsonRes)), setIsFetch(false)]);
  };

  const storeIt = () => {
    if (stores.length > 0) return;
    return sFetch();
  };

  React.useEffect(() => {
    storeIt();
    return () => console.log("Moved");
  }, [dispatch]);

  return (
    <div>
      <Category>{Cat()}</Category>
      {isFetch ? <Loading /> : <Product />}
    </div>
  );
};

Home.layout = Layout;
export default Home;
