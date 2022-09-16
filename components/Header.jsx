import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import LogoHami from "next/image";

function Header() {
  const router = useRouter();
  
  return (
    <div className="flex justify-between w-[100%]">
      <LogoHami src="/logo.png" width={100} height={80} />
      <div
        className="flex items-center border-[2px] border-cyan-800  cursor-pointer   w-[25%] h-[45px] p-[20px] rounded-md justify-between mt-5"
        // onClick={() => {
        //   searchInput.length !== 0 ? router.push("/searchProduct/search") : "";
        // }}
      >
        

        <input
          type="text"
          // value={searchInput}
          className="border-0 outline-0  w-[300px] text-right text-sm text-gray-500 rtl"
          placeholder="جست وجوی محصول"
          // onChange={(e) => {
          //   dispatch(setSearchValue(e.target.value));
          // }}
        />
        <span>
          {" "}
          <BsSearch className=" w-[25px] h-[25px] " fill="#575563" />
        </span>
      </div>
      <FaUser onClick={() => router.push('/admin')} className="text-4xl m-4 cursor-pointer text-[#FFB200]"/>
    </div>
    
  );
}

export default Header;
