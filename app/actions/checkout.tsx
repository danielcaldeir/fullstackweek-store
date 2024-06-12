// "use server";

import { CartProduct } from "@/app/providers/cart";
import Stripe from "stripe";

// import { CartProduct } from "@/providers/cart";
// import Stripe from "stripe";

export const createCheckout = async (products: CartProduct[]) => {
  // CRIAR CHECKOUT
  const stripe = new Stripe("sk_test_51O7j8bIi2FGND1dnxBK2egeLD4tTcBtS7ibrGbQdwVR63dGHuCy1yK593gonv3WUIcR8kjTLsI2SMRA4U6dWoEAq00PkPqi2XC", 
        // { apiVersion: "2023-10-16",}
    );
  
  // const Stripe = require("stripe");
  // const stripe = Stripe(process.env.NEXT_SECRET_STRIPE_SECRET_KEY);

  // stripe.customers.create({
  //   email: 'danielcaldeir@example.com',
  // })
  //   .then(customer => console.log(customer.id))
  //   .catch(error => console.error(error));

  // try {
  //   const checkout = await stripe.checkout.sessions.create({
  //     payment_method_types: ["card"],
  //     mode: "payment",
  //     success_url: process.env.HOST_URL,
  //     cancel_url: process.env.HOST_URL,
  //     line_items: products.map((product) => {
  //       return {
  //         price_data: {
  //           currency: "brl",
  //           product_data: {
  //             name: product.name,
  //             description: product.description,
  //             images: product.imageUrls,
  //           },
  //           unit_amount: product.totalPrice * 100,
  //         },
  //         quantity: product.quantity,
  //       };
  //     }),
  //   });
  //   return checkout;
  // } catch (error) {
  //   console.log(error.type);
  //   console.log(error.statusCode);
  //   console.log(error.message);
  //   return error;
  // }
  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/?success=true",
    cancel_url: "http://localhost:3000/?canceled=true",
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  // RETORNAR O CHECKOUT
  return checkout;
};