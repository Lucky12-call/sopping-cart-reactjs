import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { deleteProduct } from "../redux_components/slices/productSlice";

const Cart = () => {
  const cart = useSelector((state) => state.product.productArr);
  let quant = useSelector((state) => state.product.quantityArr);
  const dispatch = useDispatch();

  return cart.length === 0 ? (
    <>
      <h1 className="text-center">Cart is Empty</h1>
    </>
  ) : (
    <>
      {cart?.map((cartProduct) => (
        <div
          key={cartProduct.id}
          className="sm:h-32 h-24 w-full justify-between p-2 my-2 flex flex-row shadow-[0_0_15px_lightgray]"
        >
          <img
            src={cartProduct.thumbnail}
            alt={cartProduct.title}
            className="sm:h-full sm:w-40 h-full w-20"
          />
          <div>
            <h4>{cartProduct.title.slice(0, 15)}...</h4>
            <h5>Price:- $ {cartProduct.price}</h5>
            <Rating
              precision={0.5}
              defaultValue={cartProduct.rating}
              readOnly
            />
          </div>

          <div>
            <h4 className="text-sm">
              Quantity:{" "}
              {quant.map((item) => {
                if (item.id === cartProduct.id) {
                  return +item.quantity;
                }
              })}
            </h4>
            <button
              className="sm:p-2 px-1 sm:rounded-md rounded-sm bg-red-500 hover:bg-red-400 mt-5 "
              onClick={() => dispatch(deleteProduct(cart.indexOf(cartProduct)))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
