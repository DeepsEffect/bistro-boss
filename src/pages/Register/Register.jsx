import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const password = watch("password");

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("fullName")}
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("email", {
              required: "email is required",
            })}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("password", {
              required: "password is required",
            })}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("confirmPassword", {
              required: "please confirm your password",
              validate: (value) =>
                value === password || "Password do not match",
            })}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <Button type="submit" className="w-full bg-amber-600">
            Create Account
          </Button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to={"/login"}
          >
            Log in
          </Link>
          .
        </div>
      </form>
    </div>
  );
};

export default Register;
