import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div
        id="my_modal_3"
        className=" text-black h-screen flex items-center justify-center "
      >
        <div className="md:w-1/2 w-fit dark:bg-slate-900 dark:text-white border-[2px] border-silver shadow-lg p-10 rounded-xl">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
          <h3 className="font-bold text-lg">Sign Up</h3>

          <div className="space-y-2 mt-4">
            <span>Full Name</span>
            <br />
            <input
              type="text"
              placeholder="enter your full name "
              className="border rounded-md px-3 w-80 outline-none dark:bg-slate-900 "
              {...register("name", { required: true })}

          /> <br />
                            {errors.name && <span className="text-sm text-red-600">name is required</span>}

          </div>

          <div className="space-y-2 mt-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              {...register("email", { required: true })}
              className="border rounded-md px-3 w-80 outline-none dark:bg-slate-900 "
            /> <br />
            {errors.email && <span className="text-sm text-red-600">email is required</span>}
          </div>

          <div className="space-y-2 mt-5">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="enter your Password "
              {...register("password", { required: true })}
              className="border rounded-md px-3 w-80 outline-none dark:bg-slate-900 "
            />
            {errors.password && <span className="text-sm text-red-600">Password is required</span>}
          </div>
          <div className="flex justify-around mt-8">
            <button className="bg-pink-600 py-1 px-3 rounded-md text text-white">
              Sign up
            </button>
            <p>
              Already registerd ?
              <Link to="/">
                <span className="underline text-blue-600">Login</span>
              </Link>
            </p>
          </div>
      </form>
        </div>
      </div>

    </div>
  );
}

export default Signup;
