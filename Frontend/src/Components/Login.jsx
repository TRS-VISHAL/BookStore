import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <dialog id="my_modal_3" className="modal text-black  ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
        <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </button>
            </Link>
          <h3 className="font-bold text-lg">Login</h3>

          <div className="space-y-2 mt-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="enter your email "
              className="border rounded-md px-3 w-80 outline-none dark:bg-slate-900 "
              {...register("email", { required: true })}
            />
            <br />
                  {errors.email && <span className="text-sm text-red-600">Email is required</span>}

          </div>

          <div className="space-y-2 mt-5">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="enter your Password "
              className="border rounded-md px-3 w-80 outline-none dark:bg-slate-900 "
              {...register("password", { required: true })}

            />
            <br />
                  {errors.password && <span className="text-sm text-red-600">password is required</span>}

          </div>
          <div className="flex justify-around mt-8">
            <button className="bg-pink-600 py-1 px-3 rounded-md text text-white" type="submit">
              Login
            </button>
            <p>
              Not Registerd ?
              <Link to="/signup">
                <span className="underline text-blue-600">Sign up</span>
              </Link>
            </p>
          </div>
      </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
