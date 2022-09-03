import React from "react";
import Layout from "components/Layout/Layout";
import BagHead from "components/BagHead";
import InOrder from "components/Bag/InOrder";
import PayButton from "components/Bag/PayButton";
import { useDispatch, useSelector } from "react-redux";
import { orderPrice } from "rdx/bagStorage";
import Category from "components/Category";
import RemoveItemDialog from "components/Dialog/RemoveItem";
const Bag = () => {
  const [rmvId, setRmvId] = React.useState("");
  const dialogRef = React.useRef();
  const orderRef = React.useRef();

  const { bag, orderTotal, orderQuantity } = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(orderPrice());
  }, [bag, orderTotal, orderQuantity, dispatch]);

  const refOpenDialog = React.useCallback(() => {
    dialogRef.current.openDialog();
  }, []);

  return (
    <>
      <RemoveItemDialog ref={dialogRef} setRmvId={setRmvId} rmvId={rmvId} />
      <Category>
        <BagHead />
      </Category>
      <InOrder
        ref={orderRef}
        refOpenDialog={refOpenDialog}
        setRmvId={setRmvId}
        rmvId={rmvId}
      />
      {bag.length > 0 && <PayButton />}
    </>
  );
};

Bag.layout = Layout;
export default Bag;
