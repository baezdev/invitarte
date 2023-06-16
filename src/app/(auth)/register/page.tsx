import { Register } from "../components/Register"

const RegisterPage = () => {
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold text-center">Bienvenido!</h2>
      <p className="text-base text-center text-gray-400 md:text-sm">
        Continúa para vivir la experiencia
      </p>
      <h1 className="text-3xl font-bold text-center my-11">Logo xd</h1>
      <Register />
      <p className="font-medium text-center my-7">
        Ya tienes una cuenta? <a href="/login" className="font-semibold text-third"
          >Inicia sesión</a
        >
      </p>
    </>
  )
}

export default RegisterPage