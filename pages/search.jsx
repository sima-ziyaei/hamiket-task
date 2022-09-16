import { useState } from "react";
import EditProduct from "../components/EditProduct";
import DeleteProduct from "../components/DeleteProduct";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector} from "react-redux";
import { useRouter } from "next/router";
import {  setNumber} from "../redux/slices/productSlice";


function Search() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState("");
    const limit = 10;
    const dispatch = useDispatch();
    
    
    const searchItems = useSelector((state) => state.product.searchItems);

    return (  <div className="flex flex-col items-center justify-center w-[100%]">
    <Header limit={limit} currentPage={currentPage} />
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 mx-10 my-10">
      {searchItems.map((el) => {
        return (
          <div
            key={el.id}
            className="w-[80%] flex flex-col items-center justify-center shadow-md rounded  "
          >
            <img src={el.url} className="w-[100%] h-[200px] rounded " />
            <div className="text-center mt-2 mx-2 h-[75px] text-[#57C4D0]">
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
    //   getProducts={getProducts}
    />
    <button onClick={()=>{
        router.push('/');
        dispatch(setNumber(0))
    }}>  بازگشت </button>  
  </div>);
}

export default Search;