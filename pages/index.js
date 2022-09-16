import Head from "next/head";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/slices/productSlice";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productItem);
  const [currentPage, setCurrentPage] = useState(1);

  const [total, setTotal] = useState("");
  const limit = 10;

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = (currentPage) => {
    
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}_limit=${limit}`
      )
      .then((res) => {
        dispatch(setProduct(res.data));
        setTotal(res.headers["x-total-count"]);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
    <div className="grid grid-cols-5 gap-12 mx-10 my-10">
      {products.map((el) => {
        return (
          <div
            key={el.id}
            className="w-[100%] flex flex-col items-center justify-center shadow-md rounded  "
          >
            <img src={el.url} className="w-[100%] h-[200px] rounded " />
            <div className="text-center mt-2 h-[40px] text-[#57C4D0]"> {el.title} </div>
            <div className="flex mb-3 mt-7 text-[#FFB200] justify-around items-center h-[20px] w-[100%] ">
              <FaEdit className="ml-[22%] text-lg cursor-pointer"/>
              <FaTrashAlt className="cursor-pointer"/>
            </div>
          </div>
        );
      })}
    </div>
      <Pagination
        limit={limit}
        currentPage={currentPage}
        total={total}
        getProducts={getProducts}
      />
      </div>
  );
}

// export async function getStaticProps(){
//   const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=30');
//   const data = await res.data;
//   console.log(data);
//   return{
//     props:{
//       data,
//     }
//   }
// }
