import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";

interface WaitlistPromoEmailProps {
  promoCode?: string;
  finalPrice?: string;
}

const WaitlistPromoEmail = ({
  promoCode = "0WYPNNT1NW",
  finalPrice = "$4",
}: WaitlistPromoEmailProps) => (
  <Html>
    <Head />
    <Preview>Your exclusive access to XpectViral has arrived!</Preview>
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
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          🚀 The wait is over! XpectViral is here.
        </Heading>
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#dddddd",
          }}
        >
          Thank you for being one of the first to join us. Your patience and enthusiasm have been incredible, and we're overwhelmed by the number of sign-ups for our waitlist!
        </Text>
        <Text
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          To thank you, we're offering you an exclusive advantage.
        </Text>
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#dddddd",
          }}
        >
          As a waitlist member, you get a 40% discount on lifetime access to XpectViral. This is your chance to get an unfair advantage on X for just <span style={{ color: "#00bcd4", fontWeight: "bold" }}>{finalPrice}</span>.
        </Text>

        <div style={{ textAlign: 'center', margin: '32px 0' }}>
          <Text
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "10px",
              color: "#dddddd",
            }}
          >
            Use this promo code at checkout:
          </Text>
          <div
            style={{
              display: 'inline-block',
              border: '1px dashed #555',
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: '#252525',
              marginBottom: '20px',
            }}
          >
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#ffffff",
                letterSpacing: "2px",
                margin: 0,
              }}
            >
              {promoCode}
            </Text>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            href="https://xpectviral.com/checkout" // Change this to your actual checkout URL
            style={{
              backgroundColor: "#00bcd4",
              color: "#000000",
              padding: "16px 32px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get My Lifetime Access
          </Button>
        </div>

        <Text
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginTop: "30px",
            color: "#888888",
            textAlign: "center"
          }}
        >
          This offer is our way of saying thank you. Get ready to dominate X.
          <br />— The XpectViral Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WaitlistPromoEmail; 