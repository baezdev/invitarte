'use client'

import { Formik, Form } from 'formik'
 
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Email, Lock, User } from "@/components/ui/Icons";
import { RegisterSchema } from '@/helpers/validateForm';

const initialValues = {
  username: '',
  email: '',
  password: ''
}

const handleSubmit = (values: any) => {
  console.log(values)
}

export const Register = () => {
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
            label="Nombre"
            holder="Su nombre"
            icon={<User />}
            done
          />
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
          <Button type='submit'>Registrate</Button>
        </div>
      </Form>
    </Formik>
  )
}