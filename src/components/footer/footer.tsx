import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

type FooterLink = {
  label: React.ReactNode;
  href: string;
  title: string;
  disabled?: boolean;
};

const links: { title: string; links: FooterLink[] }[] = [
  {
    title: "Routine 25",
    links: [
      { label: "Download App", href: "#", title: "Coming soon" },
      { label: "Features", href: "/#features", title: "See our features" },
    ],
  },
  {
    title: "Products",
    links: [{ label: "For iPhone", href: "#", title: "Coming soon" }],
  },
  {
    title: "Company",
    links: [
      { label: "Terms & Conditions", href: "#", title: "Coming soon", disabled: true },
      { label: "Privacy Policy", href: "#", title: "Coming soon", disabled: true },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/routine25app",
        title: "Follow us on Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Github</span>
          </div>
        ),
        href: "https://github.com/jasonellington/r25-app",
        title: "View our GitHub repository",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((item, index) => (
                <li key={index}>
                  {item.disabled ? (
                    <span className="text-muted-foreground/50 cursor-default">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      title={item.title}
                      target={item.href.startsWith("https://") ? "_blank" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
