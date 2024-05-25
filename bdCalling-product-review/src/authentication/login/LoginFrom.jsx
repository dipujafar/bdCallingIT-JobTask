import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import googleLogo from "../../assets/image/googleLogo2.png";

const LoginFrom = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleGoogleSing = () => {};
  return (
    <div className=" mt-2 md:w-3/4  bg-black  bg-opacity-30  mx-auto border  rounded shadow-lg shadow-gray-300 p-5 text-black">
      <h1 className="text-2xl font-medium mb-5 uppercase text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email image */}
        <div className="flex items-center mb-5 ">
          <label>
            <AiOutlineMail className="text-2xl"></AiOutlineMail>
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            id=""
            placeholder="Your Email"
            className="w-3/4 mx-auto py-1 px-2   rounded"
          />
        </div>
        {errors.email?.type === "required" && (
          <span className="text-red-600 ml-10">Email is required</span>
        )}

        {/* Password input */}
        <div className="flex items-center mb-5 relative">
          <label>
            <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            id=""
            placeholder="Password"
            className="w-3/4 mx-auto py-1 px-2   rounded"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-6 lg:right-12"
          >
            {show ? (
              <AiOutlineEye className="text-2xl"></AiOutlineEye>
            ) : (
              <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
            )}
          </span>
        </div>
        {errors.password?.type === "required" && (
          <span className="text-red-600 ml-10">Password is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-600 ml-10">
            Password must be 6 character.
          </span>
        )}
        {errors.password?.type === "maxLength" && (
          <span className="text-red-600 ml-10">
            Password must less then 20 character.
          </span>
        )}

        <input
          type="submit"
          value="Login"
          className="w-full btn bg-blue-100 btn-sm "
        />

        <p className="text-xl text-red-700">{error}</p>
      </form>
      <fieldset className="space-y-2 border-t mt-2">
        <legend className="text-center px-2">OR</legend>
        <button
          onClick={handleGoogleSing}
          className="flex items-center btn bg-blue-100 w-full"
        >
          <img src={googleLogo} className="w-10" /> Login With Google
        </button>
      </fieldset>
      <p className="mt-2">
        Do not have Account?{" "}
        <Link to="/signup">
          <span className="text-blue-700 text-lg font-medium">Sign Up</span>
        </Link>
      </p>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p>customer@gmail.com</p>
        <p>123456</p>
        <p>admin2@gmail.com</p>
        <p>123456</p>
      </div>
    </div>
  );
};

export default LoginFrom;
