interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container px-5 mx-auto 2xl:px-32 md:px-28">
      {children}
    </div>
  )
}