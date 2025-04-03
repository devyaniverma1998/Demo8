import React from "react";

export default function Faqs() {
    return (
        <div className="container my-5 bg-light p-4">
        <h2 className="text-center mb-4">Frequently Asked Questions (FAQs)</h2>
  
        <h4>1. How can I book a trip?</h4>
        <p>
          You can book a trip by visiting our <a href="/packages">Packages</a> page, selecting your preferred destination, and following the booking process.
        </p>
  
        <h4>2. What payment methods do you accept?</h4>
        <p>
          We accept all major credit cards, PayPal, and bank transfers for your convenience.
        </p>
  
        <h4>3. Can I cancel my booking?</h4>
        <p>
          Yes, you can cancel your booking. Please refer to our <a href="/terms">Terms & Conditions</a> for cancellation policies.
        </p>
  
        <h4>4. Do you offer travel insurance?</h4>
        <p>
          No, we do not provide travel insurance directly, but we recommend purchasing one from a trusted provider.
        </p>
  
        <h4>5. How can I contact customer support?</h4>
        <p>
          You can reach out to us at <strong>support@example.com</strong> or call our helpline for assistance.
        </p>
      </div>
 
    )
}
