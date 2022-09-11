import "dotenv/config";
import "source-map-support/register";

import { getEmail } from './getEmail';

import { EmailProviders } from "./Providers";
import { SendGrid } from "./providers/sendgrid";

export {
  getEmail,
  EmailProviders,
  SendGrid
}

// const to = "nick@wylynko.com"
// const from = "nick1014375@gmail.com"
// const template = "bruh/bruhEmail"

// const main = async () => {

//   const apiKey = process.env.SENDGRID_API_KEY;

//   if (!apiKey) {
//     throw new Error(`the environment variable SENDGRID_API_KEY needs to be set`)
//   }

//   const { send } = EmailProviders([
//     SendGrid({ apiKey })
//   ])

//   const email = await getEmail({ template, to, from })

//   await send(email)

//   console.log(email)
// }

// main()