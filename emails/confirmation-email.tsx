import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

const ConfirmationEmail = () => (
  <Html>
    <Head />
    <Preview>You're on the waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thanks for joining the waitlist!</Heading>
        <Text style={text}>
          You're now on the list for XpectViral. We'll let you know as soon
          as we launch.
        </Text>
        <Text style={text}>
          In the meantime, you can follow me on{" "}
          <Link href="https://x.com/evi_1k" style={link}>
            X
          </Link>{" "}
          for updates.
        </Text>
        <Text style={text}>— The XpectViral Team</Text>
      </Container>
    </Body>
  </Html>
);

export default ConfirmationEmail;

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  margin: "40px auto",
  padding: "20px",
  width: "465px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
};

const link = {
  color: "#0070f3",
  textDecoration: "underline",
}; 