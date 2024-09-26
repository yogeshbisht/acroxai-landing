import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

const footerLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Developers",
    href: "#developers",
  },
  {
    name: "Company",
    href: "#company",
  },
  {
    name: "Blog",
    href: "#blog",
  },
  {
    name: "Changelog",
    href: "#changelog",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col gap-5 lg:flex-1 lg:flex-row lg:gap-7">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/70 transition hover:text-white md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40" />
            <InstaSocial className="text-white/40" />
            <YTSocial className="text-white/40" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
