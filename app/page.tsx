import Button from "@/components/ui/button";
import Image from "next/image";
import { barber, departing } from "@/public/illustrations";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <section aria-label="Hero">
        <Container className="flex flex-col items-center gap-8 py-12 md:flex-row-reverse md:px-16 md:py-44 lg:px-32">
          <div className="flex w-full flex-1 justify-center">
            <Image src={barber} width={425} alt="barber image" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-10">
            <h1 className="text-center text-xl font-medium text-primary-100 md:text-left lg:text-2xl">
              Bringing style to your place
            </h1>
            <p className="text-center md:text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="w-full">
              <Button className="w-full md:w-auto">Book Appointment</Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-secondary-15" aria-labelledby="about">
        <Container className="flex flex-col items-center gap-8 py-12 md:flex-row md:px-16 md:py-44 lg:px-32">
          <div className="flex w-full flex-1 justify-center">
            <Image src={departing} width={425} alt="departing image" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-10">
            <h2 className="text-center text-lg text-primary-100 md:text-left lg:text-xl">
              <strong
                id="about"
                className="mb-4 flex items-center justify-center gap-2 text-base font-normal md:justify-start"
              >
                <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
                ABOUT NOMADHAIR
                <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
              </strong>
              Your friendly neighborhood hair designer
            </h2>
            <p className="text-center md:text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="w-full">
              <Button className="w-full md:w-auto">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>
      <section>Reviews</section>
    </>
  );
}
