import React from "react";
import Category from "components/Category";
import Layout from "components/Layout/Layout";
import Product from "components/Product/Product";
import { useRouter } from "next/router";

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

const Loading = React.memo(() => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-44 h-44 rounded-full border-l-2 animate-spin border-black"></div>
    </div>
  );
});
Loading.displayName = "Loading";

const Home = () => {
  const [isFetch, setIsFetch] = React.useState(false);
  const [product, setProducts] = React.useState([]);
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
    const product = result.shoes.map((pd, id) => Object.assign(pd, { id }));
    setProducts(product);
    setIsFetch(false);
  };

  React.useEffect(() => {
    sFetch();
  }, []);

  return (
    <div>
      <Category>{Cat()}</Category>
      {isFetch ? <Loading /> : <Product product={product} />}
    </div>
  );
};

Home.layout = Layout;
export default Home;
