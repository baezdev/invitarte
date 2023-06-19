'use client'

import { Formik, Form } from 'formik'

import { Input } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"
import { Email, Lock } from "@/components/ui/Icons"
import { LoginSchema } from '@/helpers/validateForm'
 
const initialValues = {
  email: '',
  password: ''
}

export const Login = () => {
  const handleSubmit = (values: any) => {
    console.log(values)
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
            done
          />
          <Input
            name="password"
            type="password"
            label="Contraseña"
            holder="Minimo 8 caracteres"
            icon={<Lock />}
            done
          />
        <div className="mt-4">
          <Button type="submit">Acceder</Button>
        </div>
      </Form>
    </Formik>
  )
}