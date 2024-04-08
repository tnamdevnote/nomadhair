import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConfirmationEmailProps {
  username: string;
  date: string;
  time: string;
  location: string;
  comment?: string;
}

export const ConfirmationEmail = ({
  username,
  date,
  time,
  location,
  comment,
}: ConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Here is your appointment details.</Preview>

      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Row>
              <Column>
                <Img
                  src={`https://res.cloudinary.com/dtsdpcbcv/image/upload/fl_preserve_transparency/v1712346631/email-assets/logo-dark_i0gxw0.jpg?_s=public-apps`}
                  width={120}
                  alt="logo"
                />
              </Column>
            </Row>
          </Section>

          <Section style={content}>
            <Row
              style={{
                marginTop: "32px",
              }}
            >
              <Column>
                <Img
                  style={image}
                  src={`https://res.cloudinary.com/dtsdpcbcv/image/upload/fl_preserve_transparency/v1712345545/email-assets/confirmation_wlgnck.jpg?_s=public-apps`}
                  width={150}
                />
              </Column>
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3f3d56",
                  }}
                >
                  Hi {username},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3f3d56",
                  }}
                >
                  Your appointment has been confirmed.
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3f3d56",
                  }}
                >
                  See you soon!
                </Heading>

                <Text style={{ ...paragraph, marginTop: "56px" }}>
                  <b>Date: </b>
                  {date}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Time: </b>
                  {time}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>
                  {location}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  {comment && <b>Comment: </b>}
                  {comment}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | NomadHair, Grand Rapids, MI, U.S.A. | www.nomadhair.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ConfirmationEmail.PreviewProps = {
  username: "Taek",
  date: "September 7, 2022",
  time: "10:58 AM",
  location: "Upland, California, United States",
  comment: "대충 다듬어주세요",
} as ConfirmationEmailProps;

export default ConfirmationEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
  backgroundColor: "#3f3d56",
};

const content = {
  padding: "0 0 32px 0",
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
  margin: "0 auto",
};

const boxInfos = {
  padding: "20px",
};
