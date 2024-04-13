import {
  Fallback,
  NotFound as NotFoundImg,
} from "@/components/organisms/fallback";

import React from "react";

function NotFound() {
  return (
    <Fallback
      image={<NotFoundImg />}
      title="Oops! Looks like you are lost."
      body="The page you are looking for doesn’t exits."
      buttonText="Back To Home"
      redirect="/"
      // onButtonClick={() => console.log("hello")}
    />
  );
}

export default NotFound;
