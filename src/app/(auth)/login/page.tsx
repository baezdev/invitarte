import { Login } from "@/components/auth/Login"

const LoginPage = () => {
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold text-center">Bienvenido de nuevo!</h2>
      <p className="text-base text-center text-gray-400 md:text-sm">
        Continúa para seguir explorando
      </p>
      <h1 className="text-3xl font-bold text-center my-11">Logo xd</h1>
      <Login />
      <p className="text-base text-center text-gray-400 md:text-sm my-9">
        O puedes conectarte con
      </p>
      {/* <LoginSocialNetworks client:load /> */}
      <p className="font-medium text-center my-7">
        No tienes una cuenta? <a href="/register" className="font-semibold text-third"
          >Registrate aquí</a
        >
      </p>
    </>
  )
}

export default LoginPage