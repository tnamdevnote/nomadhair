import { Container } from "@/components/templates/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules/carousel";
import { Card, CardContent, CardHeader } from "@/components/molecules/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import React from "react";

const TestimonialSection = () => {
  return (
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
            {reviews.map(({ id, avatar, name, occupation, review }) => (
              <CarouselItem key={id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="min-w-0">
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
    avatar:
      "https://images.unsplash.com/photo-1610483178766-8092d96033f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxsZWdvJTIwZmlndXJlfGVufDB8fDB8fHww",
    name: "Eunsub Cho",
    occupation: "Professor at Calvin University",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1600637453426-7c64826b19d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlZ28lMjBmaWd1cmV8ZW58MHx8MHx8fDA%3D",
    name: "Moon Kim",
    occupation: "Pastor at Korean Grace Church",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1600637453281-b121a101f1fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlZ28lMjBmaWd1cmV8ZW58MHx8MHx8fDA%3D",
    name: "Youngkwang Choi",
    occupation: "Software Engineer at TwistThink",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1599744249842-ada1047fd47e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxsZWdvJTIwZmlndXJlfGVufDB8fDB8fHww",
    name: "HyeongGyu Jang",
    occupation: "Software Engineer at Vervint",
    review: `“Lorem ipsum dolor sit amet, consec tetur adi piscing
                      elit. Praesent tellus leo, vesti bulum a ipsum sed,
                      suscipit sodales ex. Vestibulum id varius risus. Fusce
                      tempus tellus sed.”`,
  },
];
