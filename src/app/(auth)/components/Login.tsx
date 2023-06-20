'use client'

import { Formik, Form } from 'formik'

import { Input } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"
import { Email, Lock } from "@/components/ui/Icons"
import { LoginSchema } from '@/helpers/validateForm'
import { signInWithEmail } from '@/service/auth'

type LoginValues = {
  email: string,
  password: string
}

const initialValues = {
  email: '',
  password: ''
}

export const Login = () => {
  const handleSubmit = async (values: LoginValues) => {
    const login = await signInWithEmail({
      email: values.email,
      password: values.password
    })

    console.log(login)
  }

  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={values => handleSubmit(values)}
      validationSchema={LoginSchema}
    >
      <Form className="flex flex-col mt-5 gap-y-5">
          <Input
            name="email"
            type="email"
            label="Email o Número de teléfono"
            holder="ejemplo@correo.com"
            icon={<Email />}
          />
          <Input
            name="password"
            type="password"
            label="Contraseña"
            holder="8 caracteres y un número"
            icon={<Lock />}
          />
        <div className="mt-4">
          <Button type="submit">Acceder</Button>
        </div>
      </Form>
    </Formik>
  )
}