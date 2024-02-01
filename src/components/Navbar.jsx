import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((state) => state.basket);
  return (
    <div className="mx-auto w-[700px] py-3 flex items-center justify-between ">
      <h1 className="text-3xl text-slate-900 italic border border-t-0 border-x-0 border-black  font-bold ">
        Uzum
      </h1>
      <div className="flex relative">
        <span className="text-2xl">
          <FaShoppingCart />
        </span>
        <span className="bg-pink-400 text-white p-1 leading-none rounded-full inline-block absolute left-5 bottom-4">
          {amount}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
