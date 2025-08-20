import React from "react";
import StarCalc from "../../Product/component/StarCalc";
import { BsFillTrash3Fill } from "react-icons/bs";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "./Quantity";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className=" border border-gray-300 overflow-hidden rounded-md flex hover:border-gray-600 hover:bg-slate-200 hover:shadow-md hover:shadow-black/50 relative">
      <div
        className="h-6 w-6 md:h-8 md:w-8 flex justify-center items-center absolute rounded-full top-1 right-1 border border-gray-500 bg-red-500"
        onClick={() => removeFromCart(data, setCartData)}
      >
        <BsFillTrash3Fill className="text-white text-xs md:text-xl" />
      </div>
      <div>
        <img src={data.image} alt="" className="h-32 w-32  md:h-40 md:w-40" />
      </div>
      <div className="flex p-4 justify-between w-full gap-2 items-center">
        <div className="space-y-1 md:space-y-2">
          <p className="text-gray-800 font-semibold text-base md:text-2xl">
            {data.pName}
          </p>
          <p className="text-gray-400 text-xs md:text-base">{data.category}</p>
          <Quantity data={data} setCartData={setCartData} />
        </div>
        <div className="space-y-3">
          <div>
            <StarCalc rating={Math.floor(data.rating)} />
          </div>
          <p className=" text-lg md:text-2xl font-bold text-orange-600">
            Rs. {data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
