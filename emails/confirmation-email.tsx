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
    <Preview>You're on the waitlist — big things ahead.</Preview>
    <Body
      style={{
        backgroundColor: "#0f0f0f",
        fontFamily: "Helvetica, Arial, sans-serif",
        color: "#ffffff",
        padding: "40px 0",
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#1a1a1a",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        <Heading
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "#ffffff",
          }}
        >
          Welcome to XpectViral 👋
        </Heading>
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#dddddd",
          }}
        >
          You’re officially on the waitlist. Thanks for hopping on early,
          you’ll be the first to know when we go live.
        </Text>
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#dddddd",
          }}
        >
          Until then, I’m sharing behind-the-scenes progress and launch updates
          on{" "}
          <Link
            href="https://x.com/evi_1k"
            style={{
              color: "#00bcd4",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            X
          </Link>
          . Feel free to follow along!
        </Text>
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginTop: "30px",
            color: "#888888",
          }}
        >
          Talk soon,
          <br />— The XpectViral Team
        </Text>
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
