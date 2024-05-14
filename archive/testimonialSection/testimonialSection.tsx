import { Container } from "@/shared/templates/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/molecules/carousel";
import { Card, CardContent, CardHeader } from "@/shared/molecules/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/atoms/avatar";
import React from "react";

const TestimonialSection = () => {
  return (
    <section aria-labelledby="testimonials" className="flex justify-center">
      <Container className="flex flex-col items-center justify-center gap-8 py-12 md:py-44">
        <h2 className="text-center text-lg text-neutral-80">
          <strong
            id="testimonials"
            className="mb-4 flex items-center justify-center gap-2 text-sm font-normal"
          >
            <span className="inline-block h-[0.5px] w-8 bg-primary-100"></span>
            TESTIMONIALS
            <span className="inline-block h-[0.5px] w-8 bg-primary-100"></span>
          </strong>
          What my clients are saying
        </h2>
        <Carousel className="w-full md:w-1/2">
          <CarouselContent className="p-2">
            {reviews.map(({ id, avatar, name, occupation, review }) => (
              <CarouselItem key={id} className="pl-4">
                <Card className="min-w-0 bg-transparent shadow-none">
                  <CardHeader
                    avatar={
                      <Avatar size="lg">
                        <AvatarImage src={avatar} alt="profile" />
                        <AvatarFallback />
                      </Avatar>
                    }
                    headingLevel={3}
                    title={name}
                    subheader={occupation}
                  />
                  <CardContent className="italic">{review}</CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;

const reviews = [
  {
    id: 0,
    avatar: "",
    name: "Eunsub Cho",
    occupation: "Professor at Calvin University",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 1,
    avatar: "",
    name: "Moon Kim",
    occupation: "Pastor at Korean Grace Church",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 2,
    avatar: "",
    name: "Youngkwang Choi",
    occupation: "Software Engineer at TwistThink",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 3,
    avatar: "",
    name: "HyeongGyu Jang",
    occupation: "Software Engineer at Vervint",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
];
