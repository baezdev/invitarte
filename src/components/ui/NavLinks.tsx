'use client'

import { useMemo, useState } from "react";

import { LinkButton } from "./LinkButton";
import { Close, Menu } from "./Icons";
import { UserAvatar } from "./UserAvatar";
import { useSession } from "@/hooks/useSession";
import { twMerge } from "tailwind-merge";

export const NavLinks = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const links = useMemo(() => [
    {
      text: "planes",
      href: "/#plans",
    },
    {
      text: "diseños",
      href: "/designs",
    },
    {
      text: "conócenos",
      href: "/#about",
    },
    {
      text: "contáctanos",
      href: "/contact",
    },
  ], [])
  const { user, signOutSession } = useSession()

  console.log(user)

  return (
    <div>
      <button className="z-30 md:hidden" onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? <Menu /> : <Close />}
      </button>
      <ul
        className={twMerge(`absolute right-0 flex flex-col items-center w-full gap-20 pb-14 text-lg font-medium capitalize bg-white cursor-pointer md:w-fit md:static md:pb-0 md:items-center md:flex-row md:gap-7 transition-all duration-200 ease-in-out z-0 shadow-sm md:shadow-none`, !openMenu ? "-top-[540px]" : "top-28")}
      >
        {links.map(({ text, href }) => (
          <li key={text}>
            <a
              className="px-1 py-[2.5px] relative after:content-[''] after:absolute after:w-0 after:hover:w-full after:h-[3px] after:bg-black after:left-0 after:bottom-0 after:rounded after:transition-all after:duration-300"
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
        <li>
          {user
            ? <UserAvatar signOutSession={signOutSession} user={user} />
            : <LinkButton text="acceder" href="/login" />}
        </li>
      </ul>
    </div>
  );
};