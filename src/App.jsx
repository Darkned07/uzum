import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./redux/features/basketSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.basket);

  useEffect(() => {
    dispatch(total());
  }, [products]);

  return (
    <>
      <header className="bg-white shadow-lg fixed w-full ">
        <Navbar />
      </header>
      <main className="pt-[20px]">
        <Basket />
      </main>
    </>
  );
}

export default App;
