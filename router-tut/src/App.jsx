import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/main/Home";
import Root from "./component/router/Root";
import Cart from "./component/main/Cart";
import { Provider } from "react-redux";
import store from "./component/redux_components/store/store";
import ItemsShowcase from "./component/main/ItemsShowcase";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="items" element={<ItemsShowcase />} />
      </Route>
    )
  );

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
