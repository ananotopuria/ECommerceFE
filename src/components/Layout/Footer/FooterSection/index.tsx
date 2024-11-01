import { FC } from "react";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: FC<FooterSectionProps> = ({ title, children }) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-[1.4rem] lg:text-[2rem] mb-3">{title}</h2>
    {children}
  </div>
);

export default FooterSection;
