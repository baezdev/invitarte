import { supabase } from "./supabase.config"

type userProps = {
  email: string
  password: string
  username?: string
}

export const createUser = async ({ email, password, username }: userProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  return {
    data,
    error
  }
}

export const signInWithEmail = async ({ email, password }: userProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return {
    data,
    error
  }
}

export const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook'
  })

  return {
    data,
    error
  }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  return {
    data,
    error
  }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return {
    error
  }
}