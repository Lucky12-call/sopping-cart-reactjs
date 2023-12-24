import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import SearchItems from "../search/SearchItems";

const Navbar = () => {
  const items = useSelector((state) => state.product.productArr);
  return (
    <>
      <nav className="h-12  w-full bg-slate-500 flex justify-between items-center text-white">
        <Link to={"/"} className="font-mono text-2xl m-5">
          <img src="ekWhiteLogo.png" alt="logo" className="h-4 sm:h-7" />
        </Link>
        <ul className="style-none m-5 flex font-mono">
          <li>
            <SearchItems />
          </li>
          <li>
            <Badge badgeContent={items.length} color="error">
              <Link to={"/cart"}>
                <FaShoppingCart className="text-xl sm:text-2xl hover:text-slate-200" />
              </Link>
            </Badge>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
