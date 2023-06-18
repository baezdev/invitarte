import { supabase } from "./supabase.config"

type userProps = {
  email: string,
  password: string
}

export const createUser = async ({ email, password }: userProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  return {
    data,
    error
  }
}