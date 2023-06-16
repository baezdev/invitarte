import { Login } from "@/app/(auth)/components/Login"
import { LoginSocialMedia } from "../components/LoginSocialMedia"

const LoginPage = () => {
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold text-center">Bienvenido de nuevo!</h2>
      <p className="text-base text-center text-gray-400 md:text-sm">
        Continúa para seguir explorando
      </p>
      <h1 className="text-3xl font-bold text-center my-11">Logo xd</h1>
      <Login />
      <p className="my-4 text-base text-center text-gray-400 md:text-sm">
        O puedes conectarte con
      </p>
      <LoginSocialMedia />
      <p className="my-4 font-medium text-center">
        No tienes una cuenta? <a href="/register" className="font-semibold text-third"
          >Registrate aquí</a
        >
      </p>
    </>
  )
}

export default LoginPage