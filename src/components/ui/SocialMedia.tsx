import Image from "next/image";

const socialMedias = [
  {
    socialName: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    socialName: "instagram",
    link: "https://www.instagram.com",
  },
  {
    socialName: "pinterest",
    link: "https://www.pinterest.com.mx",
  },
];

export const SocialMedia = () => {
  return (
    <div className="flex gap-6">
      {
        socialMedias.map(({ socialName, link }) => (
          <a
            key={socialName}
            href={link}
            target="_blank"
            className="bg-third inline-block p-[14px] rounded-3xl transition ease-in-out hover:scale-110 duration-300 hover:bg-primary"
          >
            <Image
              src={`/icons/${socialName}.svg`}
              alt={socialName}
              height={28}
              width={28}
              className="invert w-7 h-7"
            />
          </a>
        ))
      }
    </div>
  )
}
