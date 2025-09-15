import React from "react";

export default function Checkout() {
  // Stripe Checkout link placeholder (replace with your own URL from Stripe Dashboard)
  const stripeCheckoutUrl = "https://book.stripe.com/8x2eVd9bbdgFcdlaxZcQU00";

  return (
    <section>
      <h2>Purchase Consulting Hours</h2>
      <p>
        Securely pay for consulting hours using Stripe.
      </p>
      <a
        href={stripeCheckoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#635bff",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Buy Now
      </a>
    </section>
  );
}
