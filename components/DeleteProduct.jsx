import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import axios from "axios";

function DeleteProduct({ id, currentPage, limit }) {
  const products = useSelector((state) => state.product.productItem);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const selected = products.find((el) => el.id === id);
    setSelectedProduct(selected);
  }, []);

  const handleDeleteProduct=()=>{
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(console.log('deleted'))
    setIsOpen(false)
  }

  return (
    <>
      <FaTrashAlt onClick={() => setIsOpen(true)} className="cursor-pointer" />
      <Modal isOpen={isOpen}
        className="w-[35%] absolute top-[30%] left-[30%] h-[40%] bg-white shadow-md rounded-lg p-3 flex flex-col items-center justify-center">

<div className="text-2xl mb-16 text-gray-500"> آیا می خواهید این کالا را حذف کنید؟ </div>
        <div>
        <button onClick={handleDeleteProduct} className='border-2 ml-4 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold p-2 px-4 text-xl rounded-xl '> بله </button>
        <button onClick={()=> setIsOpen(false)} className='border-2 mr-4 text-gray-500 border-gray-500 font-bold p-2 px-4 text-xl rounded-xl '> خیر </button>
        </div>

      </Modal>
    </>
  );
}

export default DeleteProduct;
