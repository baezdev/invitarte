import Image from "next/image"

export const UserAvatar = () => {
  return (
    <section className="relative">
      <button className="rounded-full w-fit h-fit">
        <Image
          src='https://lh3.googleusercontent.com/a/AAcHTtfhI1_ecd1H7trFKBxb2pbw4PyWyQZt_kPCdTNM=s96-c'
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
      </button>
      <ul className="absolute w-40 h-40 p-5 text-base shadow-lg -left-14 rounded-xl">
        <li>Hola, Angel</li>
        <li>Perfil</li>
        <li>Cerrar sesion</li>
      </ul>
    </section>
  )
}