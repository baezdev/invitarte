'use client'

import { Formik, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
 
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Email, Lock, User } from "@/components/ui/Icons";
import { createUser } from '@/service/auth';
import { RegisterSchema } from '@/helpers/validateForm';
import { translateMessage } from '@/helpers/translateMessage';
import { useRouter } from 'next/navigation';

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
  const router = useRouter()

  const handleSubmit = async (values: RegisterValues) => {
    const { error } = await createUser({
      email: values.email,
      password: values.password,
      username: values.username
    })

    if(error){
      const newMessage = translateMessage(error.message)
      toast.error(`${newMessage}`)
      return
    }

    toast.success(`Su registro ha sido exitoso. Confirme su email`, {
      autoClose: 3000
    })
    
    setTimeout(() => router.push('/login') ,3000)
    
  }

  return (
    <>
    
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
              label="Email"
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
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  )
}