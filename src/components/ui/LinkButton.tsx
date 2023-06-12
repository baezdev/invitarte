import { forwardRef } from "react";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

/* const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ */

export const LinkButton: React.FC<LinkButtonProps> = ({ text, href }) => {
  return (
    <a
      className="bg-primary leading-none inline-block font-semibold text-white px-6 py-4 rounded-3xl transition ease-in-out hover:scale-110 duration-300 capitalize"
      href={href}
    >
      {text}
    </a>
  );
};