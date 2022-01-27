import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JvxegJEUT7RuCbtLoHEEh39vPICVKIR5clZ6nD0meI1Aa2zambO4vfyzQXo2yF30cOuMi1egLzPy0WQLk9ep8gd00HyXygTre"
);

const Payment = () => {
  const { paymentId } = useParams();
  console.log(paymentId)
  const [orders, setOrders] = useState({});
  console.log(orders);

  useEffect(() => {
    fetch(
      `https://blooming-mesa-58970.herokuapp.com/allOrders/${paymentId}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [paymentId]);

  return (
    <div style={{width: '50%', margin: '10% auto'}}>
      <h4 className="mb-3">
        Please Pay ${orders.cost} {orders.firstName} {orders.lastName} to {orders.email}
      </h4>

      {orders?.cost && (
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
