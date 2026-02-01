import React from 'react';
import styles from './CartSummary.module.css';

const CartSummary = ({ items }) => {
  // 1. Calculate Totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // 2. Helper function to load the Razorpay script dynamically
  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // Load the script
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // 3. Configure Options
    const options = {
      key: "rzp_test_S7kETjZwm5OVDv", // 🔴 REPLACE THIS WITH YOUR KEY ID
      amount: Math.round(total * 100), // Amount in paise (multiply by 100)
      currency: "INR", // Change to "USD" if needed
      name: "ShopHub",
      description: "Test Transaction",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
      
      handler: function (response) {
        // Successful payment
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log(response);
        // Optional: Redirect to success page or clear cart here
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3b82f6",
      },
    };

    // 4. Open Razorpay (using the window object)
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Order Summary</h2>
      
      <div className={styles.row}>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      
      <div className={styles.row}>
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      
      <div className={styles.row}>
        <span>Shipping</span>
        <span style={{ color: 'green', fontWeight: '500' }}>Free</span>
      </div>

      <div className={styles.totalRow}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className={styles.checkoutBtn} onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default CartSummary;