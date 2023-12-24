import { useSelector, useDispatch } from "react-redux";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  addProduct,
  setQuantity,
} from "../redux_components/slices/productSlice";
import { Rating } from "@mui/material";

const ItemsShowcase = () => {
  const item = useSelector((state) => state.product.itemObj);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addProduct(item));
    dispatch(setQuantity({ id: item.id, quantity: 1 }));
  };

  return (
    <div className="sm:p-0 p-2">
      <AwesomeSlider className="h-80 w-full bg-white my-3">
        {item.images?.map((subImg) => (
          <div key={subImg}>
            <img
              src={subImg}
              alt="subImg"
              style={{ objectFit: "cover" }}
              className="w-auto h-auto "
            />
          </div>
        ))}
      </AwesomeSlider>

      <div>
        <h1 className="text-2xl mt-12">{item.title}</h1>
        <h3>{item.description}</h3>
        <h3>Price:- $ {item.price}</h3>
        <Rating precision={0.5} defaultValue={item.rating} />

        <div className="flex items-center">
          <button
            onClick={() => handleClick(item)}
            className="sm:py-2 sm:px-10 sm:mr-5 bg-yellow-500 hover:bg-yellow-400 sm:rounded-lg py-2 px-4 mr-5 rounded-md"
          >
            Add TO Car
          </button>
          <button className="sm:py-2 sm:px-10 sm:mr-5 bg-orange-500 hover:bg-orange-400 sm:rounded-lg py-2 px-4 mr-4 rounded-md ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsShowcase;
