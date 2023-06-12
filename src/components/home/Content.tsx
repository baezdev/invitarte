import { InvitationContent } from "@/interfaces/interfaces"
import { Container } from "../ui/Container"
import { Title } from "../ui/Title"

import invitationContent from '@/data/content.json'
import Image from "next/image"

export const Content = () => {
  return (
    <section className="mb-24" id="content">
      <Container>
        <Title>
          Tu invitación podria tener
        </Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {invitationContent.map((content) => <ContentCard key={content.title} {...content} />)}
        </div>
      </Container>
    </section>
  )
}

const ContentCard: React.FC<InvitationContent> = ({ icon, title, desc}) => {
  return (
    <div
      className="flex items-start gap-4 border border-transparent p-3 h-[113.46px] rounded-2xl hover:border-gray-300 transition-all duration-200 hover:bg-gray-100"
    >
      <div
        className="flex items-center justify-center w-14 h-14 bg-primary rounded-2xl basis-14"
      >
        <Image src={`/icons/${icon}.svg`} alt={title} className="invert" width={36} height={36}/>
      </div>
      <div className="basis-4/5">
        <span className="text-lg font-semibold">{title}</span>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  )
}