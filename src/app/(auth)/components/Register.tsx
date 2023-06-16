'use client'

import { useForm, FormProvider } from "react-hook-form"
import { Input } from "@/components/form/Input";
import { Button } from "@/components/ui/Button";
import { Email, Lock, User } from "@/components/ui/Icons";


export const Register = () => {
  const formMethods = useForm()

  return (
    <FormProvider {...formMethods}>
      <form className="mt-5">
        <div className="mb-5">
          <Input
            name="name"
            type="text"
            label="Nombre"
            holder="Su nombre"
            icon={<User />}
            done
          />
        </div>
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
          <Button>Registrate</Button>
        </div>
      </form>
    </FormProvider>
  );
};