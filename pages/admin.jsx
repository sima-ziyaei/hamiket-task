import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";

function admin() {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      userName: yup.string().trim().required(" نام کاربری اجباری است "),
      password: yup
        .string()
        .required(" رمز عبور اجباری است ")
        .min(8, " رمزعبور باید بیشتر از 8 حرف باشد "),
    }),
  });

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center w-[100%] h-[600px] ">
      <form
        onSubmit={formik.handleSubmit}
        className="border w-[30%] h-[500px] border-[#d2d2d3] rounded-lg flex items-center justify-center flex-col"
      >
        <Logo src="/logo-siah.png" width={100} height={80} />
        <input
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder=" نام کاربری "
          className="pr-2 mt-10 border border-[#57C4D0] rounded h-[50px] w-[70%] "
        />
        <div className="h-[20px] text-start end w-[70%]">
        {formik.errors.userName && (
          <div className="pt-3  text-[#FFB200]">{formik.errors.userName}</div>
        )}</div>
        <div className=" mt-10 w-[100%]  flex items-center justify-center relative flex-col ">
          {show ? (
            <AiFillEyeInvisible
              onClick={() => setShow(false)}
              className=" text-xl absolute top-[50%] left-[20%] box-border translate-y-[-50%] z-10"
            />
          ) : (
            <AiFillEye
              onClick={() => setShow(true)}
              className=" text-xl absolute top-[50%] left-[20%] box-border translate-y-[-50%] z-10"
            />
          )}
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" رمز عبور "
            type={show ? "text" : "password"}
            className="pr-2 pl-1 box-border border border-[#57C4D0] rounded h-[50px] w-[70%] "
          />
        </div>
        <div className="h-[20px] text-start end w-[70%]">
          {formik.errors.password && (
            <div className="pt-3 text-[#FFB200] ">{formik.errors.password}</div>
          )}</div>
        <button
          type="submit"
          onClick={handleChange}
          className="mt-10 w-[70%] bg-[#57C4D0] rounded h-[50px] text-white font-semibold text-xl hover:bg-[#20b5c5]"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default admin;
