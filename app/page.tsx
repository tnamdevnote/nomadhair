import Button from "@/components/ui/button";
import Image from "next/image";
import barber from "@/public/illustrations/barber.svg";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <section className="">
        <Container className="flex flex-col items-center gap-8 py-8 md:flex-row-reverse md:px-16 lg:px-32">
          <div className="flex w-full flex-1 justify-center">
            <Image src={barber} width={425} alt="barber image" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-10">
            <h2 className="text-center font-medium text-primary-100 md:text-left lg:text-2xl">
              Bringing style to your place
            </h2>
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
      <section>About</section>
      <section>Reviews</section>
    </>
  );
}
