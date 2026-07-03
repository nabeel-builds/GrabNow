import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#09090B",
        minHeight: "100vh",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#F97316",
          }}
        >
          About GrabNow
        </h1>

        {/* Intro */}
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            color: "#d4d4d8",
            maxWidth: "900px",
            margin: "0 auto 50px auto",
          }}
        >
          Welcome to GrabNow, your trusted destination for smart and modern
          online shopping. We focus on delivering premium quality products,
          smooth shopping experiences, and reliable customer service that makes
          every purchase simple and enjoyable.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Mission */}
          <div
            style={{
              backgroundColor: "#18181B",
              padding: "35px",
              borderRadius: "18px",
              width: "320px",
              border: "1px solid #27272A",
              boxShadow: "0 0 20px rgba(249,115,22,0.08)",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                color: "#F97316",
                marginBottom: "18px",
                fontSize: "30px",
              }}
            >
              Our Mission
            </h2>

            <p
              style={{
                color: "#a1a1aa",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              GrabNow is dedicated to making online shopping fast, affordable,
              and secure while providing customers with the latest trending
              products and trusted services.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              backgroundColor: "#18181B",
              padding: "35px",
              borderRadius: "18px",
              width: "320px",
              border: "1px solid #27272A",
              boxShadow: "0 0 20px rgba(249,115,22,0.08)",
            }}
          >
            <h2
              style={{
                color: "#F97316",
                marginBottom: "18px",
                fontSize: "30px",
              }}
            >
              Our Vision
            </h2>

            <p
              style={{
                color: "#a1a1aa",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Our vision is to become a leading e-commerce platform known for
              innovation, trust, quality products, and excellent customer
              satisfaction across every shopping category.
            </p>
          </div>

          {/* Why Choose Us */}
          <div
            style={{
              backgroundColor: "#18181B",
              padding: "35px",
              borderRadius: "18px",
              width: "320px",
              border: "1px solid #27272A",
              boxShadow: "0 0 20px rgba(249,115,22,0.08)",
            }}
          >
            <h2
              style={{
                color: "#F97316",
                marginBottom: "18px",
                fontSize: "30px",
              }}
            >
              Why Choose Us
            </h2>

            <p
              style={{
                color: "#a1a1aa",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              GrabNow offers secure shopping, smooth order management, premium
              products, responsive support, and a modern user experience
              designed for convenience and trust.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            marginTop: "70px",
            padding: "40px",
            backgroundColor: "#18181B",
            borderRadius: "20px",
            border: "1px solid #27272A",
            boxShadow: "0 0 25px rgba(249,115,22,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              color: "#F97316",
              marginBottom: "20px",
            }}
          >
            Experience Shopping with GrabNow
          </h2>

          <p
            style={{
              color: "#d4d4d8",
              lineHeight: "1.9",
              fontSize: "18px",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            GrabNow is built for customers who value convenience, reliability,
            and modern shopping experiences. Our goal is to continuously improve
            and deliver a platform that customers love and trust every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;