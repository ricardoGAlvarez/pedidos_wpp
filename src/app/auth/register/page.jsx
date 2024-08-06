"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password != data.confirmPassword) {
      return alert("contras no coinciden");
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.push("/auth/login");
    }
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-slate-200 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Registro</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-600 block"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("username", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-600 block"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
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
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-600 block"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-600 block"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
