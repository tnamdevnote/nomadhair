import { Card, CardContent, CardHeader } from "@/components/molecules/card";
import { Container } from "@/components/templates/container";
import search from "@/public/illustrations/location_search.svg";
import place from "@/public/illustrations/place.svg";
import confirmed from "@/public/illustrations/confirmed.svg";
import Image from "next/image";
import React from "react";
import DividerTriangle from "./dividerTriangle";

function FeatureSection() {
  return (
    <section className="relative">
      <Container className="flex flex-col gap-16 py-16 pb-64 pt-32">
        <h2 id="features" className="text-lg font-bold text-primary-100">
          How it works
        </h2>
        <div
          className="grid grid-cols-1 grid-rows-3 gap-16 md:grid-cols-6 md:grid-rows-6 md:gap-8"
          aria-labelledby="features"
        >
          <Card className="col-span-1 row-span-1 mx-auto flex min-w-0 max-w-96 flex-col items-center gap-8 p-0 shadow-none md:col-span-2 md:row-span-4">
            <Image src={search} width={200} alt="schedule image" />
            <div>
              <CardHeader headingLevel={3} title="01. Schedule" subheader="" />
              <CardContent>
                {`Choose a date and time that works best for you and provide the
                address where you would like to have your haircut.`}
              </CardContent>
            </div>
          </Card>
          <Card className="col-span-1 row-span-1 mx-auto flex min-w-0 max-w-96 flex-col items-center p-0 shadow-none md:col-span-2 md:col-start-3 md:row-span-4 md:row-start-2 md:gap-8">
            <Image src={confirmed} width={150} alt="schedule image" />
            <div>
              <CardHeader
                headingLevel={3}
                title="02. Confirmation"
                subheader=""
              />
              <CardContent>
                {`You’ll receive a confirmation email with all the details, and
                I'll also reach out prior to your appointment to confirm and
                discuss any specific requirements.`}
              </CardContent>
            </div>
          </Card>
          <Card className="col-span-1 row-span-1 mx-auto flex min-w-0 max-w-96 flex-col items-center gap-8 p-0 shadow-none md:col-span-2 md:col-start-5 md:row-span-4 md:row-start-3">
            <Image src={place} width={230} alt="schedule image" />
            <div>
              <CardHeader headingLevel={3} title="03. Visit" subheader="" />
              <CardContent>
                {`On the appointment day, I'll arrive at your doorstep with all
                the necessary equipment. Sit back and enjoy the quality haircut
                in the comfort of your own home.`}
              </CardContent>
            </div>
          </Card>
        </div>
      </Container>
      <DividerTriangle className="absolute bottom-0 m-[-1px] w-full" />
    </section>
  );
}

export default FeatureSection;
