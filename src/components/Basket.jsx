import React from "react";
import { useSelector } from "react-redux";
import BasketList from "./BasketList";

function Basket() {
  const { products, price } = useSelector((state) => state.basket);
  return (
    <div className="mx-auto w-[700px] py-10 ">
      <div className="w-full border h-[400px]  my-[20px] rounded-2xl overflow-y-scroll px-[10px]">
        {products &&
          products.map((pro) => {
            return <BasketList key={pro.id} pro={pro} />;
          })}
        {products < 1 && (
          <h2 className="text-2xl font-bold italic text-center mt-[5px]">
            No data!
          </h2>
        )}
      </div>
      <hr className="w-full  mt-[20px] bg-slate-400 h-[2px]" />

      <div className="flex flex-row items-center justify-between static">
        <h2 className="text-2xl font-bold ">Total:</h2>
        <p className="text-2xl font-bold border border-t-0 border-x-0  border-black italic">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Basket;
