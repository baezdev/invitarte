import { User } from "@supabase/supabase-js"
import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

type UserAvatarProps = {
  signOutSession?: () => void,
  user: User
}

export const UserAvatar = ({ signOutSession, user }: UserAvatarProps) => {
  const [open, setOpen] = useState(false)
  const switchOpen = () => setOpen(!open)

  const user_metadata = user.user_metadata
  const username = user_metadata.username ?? user_metadata.name

  return (
    <section className="relative">
      <button className="rounded-full w-fit h-fit" onClick={switchOpen}>
        <Avatar user={user}/>
      </button>
      <ul 
        className={twMerge(`absolute flex-col w-max h-max py-3 text-base border cursor-auto border-primary right-12 top-0 bg-white rounded-xl transition-all duration-200 font-semibold`, open ? 'flex' : 'hidden')}
      >
        <li className="flex gap-2 px-5 py-3 border-b border-gray-300">
        <Avatar user={user}/>
          <div>
            <p className="font-semibold">{username}</p>
            <p className="text-sm font-normal text-gray-600 lowercase">{user.email}</p>
          </div>
        </li>
        <li className="px-5 py-3 hover:bg-gray-100">Perfil</li>
        <li className="bg-gray-100 text-third">
          <button
            className="w-full px-5 py-3 text-left"
            onClick={signOutSession}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </section>
  )
}

export const Avatar = ({ user }: UserAvatarProps) => {
  const { user_metadata } = user
  const username = user_metadata.username ?? user_metadata.name
  const initial = username[0]

  if(user_metadata.avatar_url){
    return (
      <Image
        src={user_metadata.avatar_url}
        alt="user"
        width={40}
        height={40}
        className="rounded-full"
      />
    )
  }

  return (
    <div className="flex items-center justify-center w-10 h-10 text-white uppercase rounded-full bg-primary">
      {initial}
    </div>
  )
}