'use client'

import { Formik, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Input } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"
import { Email, Lock } from "@/components/ui/Icons"
import { LoginSchema } from '@/helpers/validateForm'
import { signInWithEmail } from '@/service/auth'
import { useRouter } from 'next/navigation';
import { translateMessage } from '@/helpers/translateMessage';

type LoginValues = {
  email: string,
  password: string
}

const initialValues = {
  email: '',
  password: ''
}

export const Login = () => {
  const router = useRouter()

  const handleSubmit = async (values: LoginValues) => {
    const { error } = await signInWithEmail({
      email: values.email,
      password: values.password
    })

    if(error){
      const newMessage = translateMessage(error.message)
      toast.error(`${newMessage}`)
      return
    }

    router.push('/')
  }

  return (
    <>
    
      <Formik
        initialValues={initialValues} 
        onSubmit={values => handleSubmit(values)}
        validationSchema={LoginSchema}
      >
        <Form className="flex flex-col mt-5 gap-y-5">
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
            <Button type="submit">Acceder</Button>
          </div>
        </Form>
      </Formik>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  )
}