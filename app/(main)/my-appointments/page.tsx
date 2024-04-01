import { Button } from "@/components/atoms/button";
import Separator from "@/components/atoms/separator";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/molecules/drawer";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { UpcomingAppointment, PastAppointment } from "./components";
import NewAppointment from "./components/newAppointment/newAppointment";
import { useCookies } from "react-cookie";



function MyAppointments() {
  // const isMobile = /Mob/i.test(navigator.userAgent);
  const [cookies, setCookies, removeCookies] = useCookies(["id"]);
  const [pastAppointments, setPastAppointments] = useState<any[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);

  useEffect(() => {
    fetch("/my-appointments/api?userId=" + cookies.id, {
      method: "GET"
    })
    .then( async (response) => {
      const responseObj = await response.json();
      console.log(responseObj);
      // TODO: replace date time conversion with the util function
      for (let i in responseObj.pastAppointments) {
        responseObj.pastAppointments[i].date = new Date(responseObj.pastAppointments[i].timeSlot.startTime * 1000).toLocaleDateString();
        responseObj.pastAppointments[i].time = new Date(responseObj.pastAppointments[i].timeSlot.startTime * 1000).toLocaleTimeString();
      }
      for (let i in responseObj.upcomingAppointments) {
        responseObj.upcomingAppointments[i].date = new Date(responseObj.upcomingAppointments[i].timeSlot.startTime * 1000).toLocaleDateString();
        responseObj.upcomingAppointments[i].time = new Date(responseObj.upcomingAppointments[i].timeSlot.startTime * 1000).toLocaleTimeString();
      }
      setPastAppointments(responseObj.pastAppointments);
      setUpcomingAppointments(responseObj.upcomingAppointments);
    });
  }, [])

  return (
    <div className="relative flex flex-col gap-8 py-16 md:min-h-0">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              icon={<PlusIcon />}
              size="lg"
              className="fixed bottom-12 right-8 bg-primary-90 md:hidden"
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>This is a Drawer</DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Container>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-6 p-4 md:grid-cols-12 md:p-16">
        <div className="col-span-6 md:max-h-[40rem] md:overflow-auto md:pb-4">
          <UpcomingAppointment appointments={upcomingAppointments}/>
          <PastAppointment appointments={pastAppointments}/>
        </div>
        <Separator orientation="vertical" className="hidden h-auto md:block" />
        <div className="hidden md:sticky md:top-32 md:col-span-5 md:block">
          <section
            aria-labelledby="new-appointment"
            className="flex h-full flex-col"
          >
            <div className="hidden md:sticky md:top-32 md:col-start-8 md:col-end-13 md:block">
              <NewAppointment />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyAppointments;
