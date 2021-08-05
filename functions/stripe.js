
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async function(event, context) {
    const total = event.queryStringParameters.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
        description:"ECommerce",
    });
    console.log("intenttttt",paymentIntent)
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
          },
        body: JSON.stringify({clientSecret: paymentIntent.client_secret})
    };
}