import React from "react";
import Layout from "components/Layout/Layout";
import BagHead from "components/BagHead";
import InOrder from "components/Bag/InOrder";
import PayButton from "components/Bag/PayButton";
import { useDispatch, useSelector } from "react-redux";
import { orderPrice } from "rdx/bagStorage";
import Category from "components/Category";
const Bag = () => {
  const { bag, orderTotal, orderQuantity } = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(orderPrice());
  }, [bag, orderTotal, orderQuantity, dispatch]);

  return (
    <div>
      <Category>
        <BagHead />
      </Category>
      <InOrder />
      {bag.length > 0 && <PayButton />}
    </div>
  );
};

Bag.layout = Layout;
export default Bag;
