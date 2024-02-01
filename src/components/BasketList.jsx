import React from "react";
import {
  incrementProducts,
  decrementProducts,
  removeItem,
} from "../redux/features/basketSlice";
import { useDispatch } from "react-redux";

function BasketList({ pro }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center justify-between mt-5 border rounded-xl p-2">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-lg"
          src={pro.images[0]}
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold ">{pro.title}</h1>
        <h2 className="text-md font-semibold italic">${pro.price}</h2>
        <button
          className="border px-1 text-black bg-white hover:bg-black hover:text-white text-md  hover:italic active:text-red-500 rounded-lg  active:bg-slate-500"
          onClick={() => dispatch(removeItem(pro.id))}
        >
          remove
        </button>
      </div>
      <div className="flex  flex-row items-center gap-5">
        <button
          className="border px-1  rounded-md  hover:text-white hover:bg-red-500 "
          onClick={() => {
            if (pro.amount === 1) {
              dispatch(removeItem(pro.id));
            } else {
              dispatch(incrementProducts(pro.id));
            }
          }}
        >
          -
        </button>
        <h2 className="border p-1 rounded-md italic">{pro.amount}</h2>
        <button
          className="border px-1  rounded-md  hover:text-white hover:bg-green-500 "
          onClick={() => {
            dispatch(decrementProducts(pro.id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketList;
