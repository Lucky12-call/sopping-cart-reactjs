import { showItem } from "../redux_components/slices/productSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rating, LinearProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.product.searchItem);

  // fetch data using React Query
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      return data.products;
    },
  });

  if (error) {
    return <h1 className="text-center">{error.message}</h1>;
  } else if (isLoading) {
    return <LinearProgress sx={{ margin: "2px" }} />;
  }
  return searchItem !== "" ? (
    data
      ?.filter((pro) => {
        return (
          searchItem &&
          pro.title.toLowerCase().includes(searchItem) &&
          pro.title.split("")
        );
      })
      .map((searchPro) => (
        <div
          key={searchPro.id}
          className="w-full flex flex-wrap gap-2 justify-center"
        >
          <div className="h-80 w-48 p-2 rounded-lg flex-col shadow-[0_0_15px_lightgray]">
            <img
              src={searchPro.thumbnail}
              alt={searchPro.title}
              className="h-36 w-full"
            />
            <h4>
              {searchPro.title.length <= 15
                ? searchPro.title
                : searchPro.title.slice(0, 15)}
              ...
            </h4>
            <h5>$ {searchPro.price}</h5>
            <Rating readOnly precision={0.5} defaultValue={searchPro.rating} />
            <Link
              to={"/items"}
              onClick={() => dispatch(showItem(searchPro))}
              className="hover:text-blue-600"
            >
              <h5>
                {searchPro.description.length <= 40
                  ? searchPro.description
                  : searchPro.description.slice(0, 40)}
                ...
              </h5>
            </Link>
          </div>
        </div>
      ))
  ) : (
    <div className="w-full flex flex-wrap gap-2">
      {data?.map((product) => (
        <div
          key={product.id}
          className="h-80 w-48 p-2 rounded-lg justify-center flex-col grow shadow-[0_0_15px_lightgray]"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="h-36 w-full"
          />
          <h4>
            {product.title.length <= 15
              ? product.title
              : product.title.slice(0, 15)}
            ...
          </h4>
          <h5>$ {product.price}</h5>
          <Rating readOnly precision={0.5} defaultValue={product.rating} />
          <Link
            to={"/items"}
            onClick={() => dispatch(showItem(product))}
            className="hover:text-blue-600"
          >
            <h5>
              {product.description.length <= 40
                ? product.description
                : product.description.slice(0, 40)}
              ...
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
