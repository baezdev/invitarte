'use client'

import { Input } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"
import { Email, Lock } from "@/components/ui/Icons"
import { Formik, Form } from 'formik'
 
/* type Inputs = {
  email: string,
  password: string
} */

const initialValues = {
  email: '',
  password: ''
}

export const Login = () => {
  return (
    <Formik
      initialValues={initialValues}  
      onSubmit={(values, actions) => {
        console.log(values)
      }}
    >
      <Form className="mt-5">
        <div className="mb-5">
          <Input
            name="email"
            type="email"
            label="Email o Número de teléfono"
            holder="ejemplo@correo.com"
            icon={<Email />}
            validation={{ required: true, }}
            done
          />
        </div>
        <div className="mb-5">
          <Input
            name="password"
            type="password"
            label="Contraseña"
            holder="Minimo 8 caracteres"
            icon={<Lock />}
            done
          />
        </div>
        <div className="mt-9">
          <Button>Acceder</Button>
        </div>
      </Form>
    </Formik>
  )
}