// import React from "react";
// import Category from "components/Category";
// import Layout from "components/Layout/Layout";
// import Product from "components/Product/Product";

// // export async function getServerSideProps({ res, req }) {
// //   const Fetcher = await fetch(
// //     "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
// //   );

// //   const result = await Fetcher.json();
// //   const product = result.shoes;
// //   return {
// //     props: {
// //       product,
// //     },
// //   };
// // }

// const Loading = React.memo(() => {
//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <div className="w-96 h-96 rounded-full border-l-2 animate-spin border-black"></div>
//     </div>
//   );
// });

// const Home = () => {
//   // const Home = ({ product }) => {
//   const [loading, setLoading] = React.useState(false);
//   const [product, setProducts] = React.useState([]);

//   const sFetch = async () => {
//     setLoading(true);
//     const Fetcher = await fetch(
//       "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
//     );
//     const result = await Fetcher.json();
//     const product = result.shoes;
//     setProducts(product);
//     setLoading(false);
//   };

//   React.useEffect(() => {
//     sFetch();
//   }, []);

//   return (
//     <div>
//       <Category>New Release</Category>
//       {loading ? <Loading /> : <Product product={product} />}
//     </div>
//   );
// };

// Home.layout = Layout;
// export default Home;

export default async function Index() {}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/all",
      permanent: false,
    },
  };
}
