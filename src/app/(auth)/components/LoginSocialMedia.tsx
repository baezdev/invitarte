'use client'

import { Facebook, Google } from "@/components/ui/Icons";

export const LoginSocialMedia = () => {
  const handleLoginGoogle = () => {
    console.log('Google')
  }

  const handleLoginFacebook = () => {
    console.log('Facebook')
  }

  return (
    <section className="flex items-center justify-center gap-4">
      <SocialButton onClick={handleLoginGoogle}>
        <Google />
      </SocialButton>
      <SocialButton onClick={handleLoginFacebook}>
        <Facebook />
      </SocialButton>
    </section>
  )
}

interface SocialButtonProps {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SocialButton = ({ children, onClick }: SocialButtonProps) => {
  return (
    <button 
      className="p-3 transition duration-200 ease-in-out border-2 border-gray-200 rounded-full bg-gray-50 hover:fill-white hover:bg-third hover:scale-110 hover:border-third"
      onClick={onClick}
    >
      {children}
    </button>
  )
}