import ReactPaginate from "react-paginate";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useCallback } from "react";


function Pagination({limit,currentPage, getProducts, total, searchValue}) {
  const page = ' page';


const handlePageClick = useCallback((data) => {
  currentPage = data.selected + 1;
    getProducts(currentPage)
}, [currentPage, searchValue, total]);
  
  return (
    <div>
      <ReactPaginate
        previousLabel={<IoArrowUndoSharp />}
        nextLabel={<IoArrowRedoSharp />}
        breakLabel={"..."}
        pageCount={Math.ceil(total/limit)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"flex flex-row-reverse mt-24 mb-12 rtl"}
        pageClassName={
          "border-2 border-[#57C4D0]  mr-3 pt-2 rounded-full h-[55px] w-[55px] cursor-pointer text-center font-bold text-[#57C4D0] text-2xl hover:bg-[#57C4D0] hover:text-[#fff]"
        }
        pageLinkClassName={"text-center"}
        previousClassName={
          "border border-[#57C4D0]  hover:bg-[#57C4D0]  p-4 rounded-full h-[55px] w-[55px] mr-3 text-center cursor-pointer"
        }
        previousLinkClassName={" text-[#57C4D0] font-bold hover:text-[#fff] text-2xl"}
        nextClassName={
            "border border-[#57C4D0]  hover:bg-[#013662] hover:text-[#fff] p-4 rounded-full h-[55px] w-[55px] mr-3 text-center cursor-pointer"
        }
        nextLinkClassName={" text-[#57C4D0] font-bold hover:text-[#fff] text-2xl"}
        activeClassName={"bg-[#57C4D0] text-[#fff]"}
        breakClassName={"border-2 border-[#57C4D0] p-3 mr-3 pt-1 rounded-full h-[55px] w-[55px] cursor-pointer text-center font-bold text-[#57C4D0] text-2xl hover:bg-[#57C4D0] hover:text-[#fff]"}
      />
    </div>
  );
}

export default Pagination;
