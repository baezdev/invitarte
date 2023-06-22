import { useEffect, useState } from "react"
import { getSession, signOut } from "@/service/auth"
import { type User } from '@supabase/supabase-js'

export const useSession = () => {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<string | undefined>(undefined)

  const getActiveSession = async () => {
    const { data, error } = await getSession()

    if(error){
      setError(error.message)
      return
    }

    setUser(data.session?.user)
  }

  const signOutSession = async () => {
    await signOut()
    setUser(undefined)
  }

  useEffect(() => {
    getActiveSession()
  }, [])

  return {
    user,
    error,
    signOutSession
  }
}