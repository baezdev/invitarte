'use client'

import { Formik, Form } from 'formik'
 
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Email, Lock, User } from "@/components/ui/Icons";
import { RegisterSchema } from '@/helpers/validateForm';
import { createUser } from '@/service/auth';

type RegisterValues = {
  username: string,
  email: string,
  password: string
}

const initialValues = {
  username: '',
  email: '',
  password: ''
}

export const Register = () => {
  const handleSubmit = async (values: RegisterValues) => {
    const signIn = await createUser({
      email: values.email,
      password: values.password,
      username: values.username
    })

    console.log(signIn)
  }

  return (
    <Formik
      initialValues={initialValues}  
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={RegisterSchema}
    >
      <Form className="flex flex-col mt-5 gap-y-5">
          <Input
            name="username"
            type="text"
            label="Nombre de usuario"
            holder="Ejemplo_1"
            icon={<User />}
          />
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
          <Button type='submit'>Registrate</Button>
        </div>
      </Form>
    </Formik>
  )
}