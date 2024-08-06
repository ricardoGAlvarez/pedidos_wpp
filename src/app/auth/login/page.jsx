"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
    }
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-slate-200 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Iniciar Sesion</h2>
        {error && (
          <div className="flex justify-center">
            <p className="bg-red-500 text-sm p-2 text-center text-white font-bold rounded-xl w-11/12 mb-3 ">
              {error}
            </p>
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-600 block"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded my-1.5"
              {...register("email", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-600 block"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded my-1.5"
              {...register("password", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
