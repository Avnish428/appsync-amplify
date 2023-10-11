const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_k2LGguW9L";
const stripe = require("stripe")(
  "sk_test_51Mtr7eSBqFv0HNgeWwDtjfcAkN15T6FCDfjeNdAvmGntI4d7nhs2VTdewDHaMjxpqaxEuk2aiWtDmh0UBT3jao1F00gTr5tzyF"
);

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return FAILED;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { success_url, cancel_url, price, quantity, mode } =
      event.arguments.input;

    const session = await stripe.checkout.sessions.create({
      success_url,
      cancel_url,
      line_items: [{ price, quantity }],
      mode,
    });
    const { url } = session;
    const paymentLink = url;
    return { paymentLink };
  } catch (err) {
    console.log(err, "consoel err");
    return "ERROR";
    // throw new Error(err);
  }
};
