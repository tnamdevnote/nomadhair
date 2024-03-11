import Button from "@/components/ui/button";
import Image from "next/image";
import { barber, departing } from "@/public/illustrations";
import Container from "@/components/ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section aria-label="Hero">
        <Container className="flex flex-col items-center gap-8 py-12 md:flex-row-reverse md:py-44 ">
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
        <Container className="flex flex-col items-center gap-8 py-12 md:flex-row md:py-44">
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
      <section aria-labelledby="testimonials">
        <Container className="flex flex-col items-center justify-center gap-8 py-12 md:py-44">
          <h2 className="text-center text-lg text-primary-100 lg:text-xl">
            <strong
              id="testimonials"
              className="mb-4 flex items-center justify-center gap-2 text-base font-normal"
            >
              <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
              TESTIMONIALS
              <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
            </strong>
            Sweet Reviews From My Clients
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="p-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="min-w-0 ">
                    <CardHeader
                      headingLevel={3}
                      title="Taek"
                      subheader="hello"
                    />
                    <CardContent>
                      “Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="p-1" />
            <CarouselNext className="p-1" />
          </Carousel>
        </Container>
      </section>
    </>
  );
}
