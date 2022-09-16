import Head from "next/head";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setNumber } from "../redux/slices/productSlice";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";
import EditProduct from "../components/EditProduct";
import DeleteProduct from "../components/DeleteProduct";
import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productItem);
  const [currentPage, setCurrentPage] = useState(1);

  const [total, setTotal] = useState("");
  const limit = 10;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (currentPage) => {
    if (searchValue != '') {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?title_like=${searchValue}&_page=${currentPage}&_limit=${limit}`
        )
        .then((res) => {
          dispatch(setProduct(res.data));
          dispatch(setNumber(+(res.headers["x-total-count"])));
          setTotal(res.headers["x-total-count"]);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
        )
        .then((res) => {
          dispatch(setProduct(res.data));
          setTotal((res.headers["x-total-count"]));
          dispatch(setNumber( 'همه' ))
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <Header
        getProducts={getProducts}
        limit={limit}
        currentPage={currentPage}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 mx-10 my-10">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[80%] lg:w-[100%] flex flex-col items-center justify-center shadow-md rounded  "
            >
              <img src={el.url} className="w-[100%] h-[200px] rounded " />
              <div className="text-center mt-2 mx-2 h-[85px] text-[#57C4D0]">
                {" "}
                {el.title}{" "}
              </div>
              <div className="flex mb-3 mt-7 text-[#FFB200] justify-around items-center h-[20px] w-[100%] ">
                <EditProduct
                  id={el.id}
                  currentPage={currentPage}
                  limit={limit}
                />
                <DeleteProduct
                  id={el.id}
                  currentPage={currentPage}
                  limit={limit}
                />
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
        searchValue={searchValue}
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
