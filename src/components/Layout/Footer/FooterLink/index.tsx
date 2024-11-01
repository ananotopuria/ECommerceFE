import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ to, children }) => (
  <Link
    className="sm:text-sm lg:text-xl mb-1 hover:underline hover:text-action transition-all"
    to={to}
  >
    {children}
  </Link>
);

export default FooterLink;
