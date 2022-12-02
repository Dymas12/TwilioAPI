const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.createUser = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    try {
      client.messages
        .create({
          body: "Vendo um celta 2 portas ou troco por bmw 320i com volta de 10mil",
          from: "+12185505613",
          to: "+5561986547802",
        })
        .then((message) => console.log(message.sid));
    } catch (error) {
      console.log(error);
      //post no slack com a mensagem de erro
    }
  });
