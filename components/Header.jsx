import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import LogoHami from "next/image";
import { useState } from "react";
import axios from "axios";
import {   setProduct,setSearchItems , setNumber} from "../redux/slices/productSlice";
import { useDispatch, useSelector} from "react-redux";

function Header({currentPage, limit,getProducts, searchValue, setSearchValue}) {
  const router = useRouter();


  const number = useSelector((state) => state.product.number);
  const userName = useSelector((state) => state.user.userName);


  const dispatch = useDispatch();

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
  };

  return (
    <div className="flex justify-around w-[100%]">
      <LogoHami src="/logo.png" width={100} height={80} />
      <div
        className="flex items-center border-[2px] border-gray-400  cursor-pointer  lg:w-[35%] w-[45%] h-[45px] p-[20px] rounded-md justify-between mt-5"
      >
      
        <input
          type="text"
          value={searchValue}
          className="border-0 outline-0  w-[70%] text-center text-md text-gray-500 rtl"
          placeholder="جست وجوی محصول"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        /><span className="text-gray-400" > { typeof number == 'number'?  persianNumber(+number) : number} موارد </span>
        <span>
          {" "}
          <BsSearch onClick={()=>getProducts(currentPage)} className=" w-[25px] h-[25px] text-gray-400"  />
        </span>
      </div>
      {userName ?<div className="m-4 text-xl p-2 rounded border-2 border-[#FFB200] text-gray-600"> {userName} </div>  : <FaUser onClick={() => router.push('/admin')} className="text-4xl m-4 cursor-pointer text-[#FFB200]"/>}
    </div>
   
    
  );
}

export default Header;
