import * as Yup from 'yup'

const PASSWORD_PATTER = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
const USERNAME_PATTERN = /^[a-z0-9_-]{3,16}$/igm

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('❌ Correo invalido')
    .required('❌ El correo es obligatorio'),
  password: Yup.string()
    .matches(PASSWORD_PATTER, '❌ Contraseña invalida')
    .required('❌ La contraseña es obligatoria')
})

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('❌ Correo invalido')
    .required('❌ El correo es obligatorio'),
  password: Yup.string()
    .matches(PASSWORD_PATTER, `❌ Contraseña invalida`)
    .required('❌ La contraseña es obligatoria'),
  username: Yup.string()
    .matches(USERNAME_PATTERN, '❌ Nombre de usuario invalido')
    .required('❌ El nombre de usuario es obligatorio')
})