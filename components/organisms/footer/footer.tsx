import Separator from "@/components/atoms/separator";
import Logo from "@/components/atoms/logo";
import { EnvelopeClosedIcon, IdCardIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/templates/container";

function Footer() {
  return (
    <footer role="contentinfo" className="flex justify-center bg-primary-100">
      <Container className="flex min-h-[300px] flex-col justify-center gap-4">
        <Logo mode="dark" className="h-4 self-start md:h-7" />
        <h2 className="text-sm text-white md:text-base">
          Have any questions? Feel free to reach out
        </h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 [&_p]:flex [&_p]:items-center [&_p]:gap-2 [&_p]:text-sm [&_p]:text-white">
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
        <p className="text-sm text-white">
          {"Copyright © 2024 "}
          <a href="https://tnam.dev" target="_blank">
            tnamdevnote
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
