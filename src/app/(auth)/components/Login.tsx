'use client'

import { Input } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"
import { Email, Lock } from "@/components/ui/Icons"
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string,
  password: string
}

export const Login = () => {
  const formMethods = useForm<Inputs>()
  const { handleSubmit } = formMethods

  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(formSubmit)} className="mt-5">
        <div className="mb-5">
          <Input
            name="email"
            type="email"
            label="Email o Número de teléfono"
            holder="ejemplo@correo.com"
            icon={<Email />}
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
      </form>
    </FormProvider>
  )
}