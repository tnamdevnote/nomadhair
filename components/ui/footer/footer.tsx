import Separator from "../separator";
import Logo from "../logo";
import {
  GlobeIcon,
  EnvelopeClosedIcon,
  IdCardIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Button from "../button";
import Link from "next/link";
import Container from "../Container";

function Footer() {
  return (
    <footer role="contentinfo" className="bg-primary-100 ">
      <Container className="flex min-h-[450px] flex-col justify-center gap-6 lg:px-[200px]">
        <Logo mode="dark" className="h-4 w-fit md:h-7" />
        <h2 className="text-lg text-white">Get In Touch</h2>
        <div className="flex flex-col gap-6 md:flex-row [&_p]:flex [&_p]:items-center [&_p]:gap-2 [&_p]:text-sm [&_p]:text-white">
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
        <Separator className="my-4" />
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
              size="sm"
              className="h-8 w-8 rounded-full bg-white p-0 text-primary-100 hover:bg-white/90"
            >
              <Link href="#" aria-label="Github">
                <GitHubLogoIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="h-8 w-8 rounded-full bg-white p-0 text-primary-100 hover:bg-white/90"
            >
              <Link href="#" aria-label="LinkedIn">
                <LinkedInLogoIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
