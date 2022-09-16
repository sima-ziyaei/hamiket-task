import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import axios from "axios";

function EditProduct({ id, currentPage, limit }) {
  const products = useSelector((state) => state.product.productItem);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const selected = products.find((el) => el.id === id);
    setSelectedProduct(selected);
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(selectedProduct);
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const sendProduct = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        title: selectedProduct.title,
      })
      .then(
        axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}_limit=${limit}`
        )
        .then(console.log('edited'))
      );
  };

  return (
    <div>
      <FaEdit
        onClick={() => setIsOpen(true)}
        className="ml-[22%] text-lg cursor-pointer"
      />
      <Modal
        isOpen={isOpen}
        className="w-[35%] absolute top-[30%] left-[30%] h-[45%] bg-white shadow-md rounded-lg p-3"
      >
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="border-b-2 border-black font-bold tex-xl">

              ویرایش نام
            </div>
            <BsX onClick={() => setIsOpen(false)} className=" text-xl cursor-pointer" />
          </div>

          <input
            name="title"
            type="text"
            value={selectedProduct.title}
            onChange={handleChange}
            className="w-[80%] h-[30px] border-2 mt-12 rounded border-black"
          />
          <button
            onClick={() => {
              sendProduct();
              setIsOpen(false);
            }}
            className="mt-16 bg-[#57C4D0] text-white font-bold text-xl py-2 w-[40%] rounded-lg"
          >
            {" "}
            ویرایش{" "}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default EditProduct;
