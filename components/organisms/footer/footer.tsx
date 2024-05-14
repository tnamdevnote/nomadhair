import Separator from "@/components/atoms/separator";
import Logo from "@/components/atoms/logo";
import {
  GlobeIcon,
  EnvelopeClosedIcon,
  IdCardIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { Container } from "@/components/templates/container";

function Footer() {
  return (
    <footer role="contentinfo" className="flex justify-center bg-primary-100">
      <Container className="flex min-h-[300px] flex-col justify-center gap-4">
        <Logo mode="dark" className="h-4 w-fit md:h-7" />
        <h2 className="text-sm text-white md:text-base">Get In Touch</h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 [&_p]:flex [&_p]:items-center [&_p]:gap-2 [&_p]:text-sm [&_p]:text-white">
          <p>
            <GlobeIcon type="solid" className="h-4 w-4 text-tertiary-100" />{" "}
            Grand Rapids, MI
          </p>
          <p>
            <EnvelopeClosedIcon className="h-4 w-4 text-tertiary-100" />{" "}
            taekbeen93@gmail.com
          </p>
          <p>
            <IdCardIcon className="h-4 w-4 text-tertiary-100" /> +1 (616) 254
            7534
          </p>
        </div>
        <Separator className="my-1 bg-white" />
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-white">
            {"Copyright © 2024 "}
            <a href="https://tnam.dev" target="_blank">
              tnamdevnote
            </a>
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              icon={<GitHubLogoIcon />}
              size="sm"
              className="h-8 w-8 rounded-full bg-white p-0 text-primary-100 hover:bg-white/90"
            >
              <Link
                href="https://github.com/tnamdevnote/nomadhair"
                aria-label="Github"
              />
            </Button>
            <Button
              asChild
              icon={<LinkedInLogoIcon />}
              size="sm"
              className="h-8 w-8 rounded-full bg-white p-0 text-primary-100 hover:bg-white/90"
            >
              <Link
                href="https://www.linkedin.com/in/luke-tb-nam/"
                aria-label="LinkedIn"
              />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
