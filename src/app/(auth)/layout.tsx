interface AuthLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'InvitArte - Autenticación'
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="mx-auto w-screen md:w-[450px] mt-5 p-5">
      {children}
    </section>
  )
}

export default AuthLayout