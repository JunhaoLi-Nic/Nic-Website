import emailjs from "@emailjs/browser";

// Define an interface for the details parameter to ensure it receives the correct types
interface FormData {
    name: string;
    email: string;
    website: string;
    message: string;
    to_email:"nicholasleeeman@gmail.com"
  }

const sendCustomEmail = (details: FormData): void => {
  // Initialize using your User ID saved in the .env file
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID as string);

  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID as string,  // The service ID saved in the .env file
      import.meta.env.VITE_EMAIL_TEMPLATE_ID as string, // The template ID also saved in the .env file
      {
        to_email: details.to_email,
        from_name: details.name, 
        website: details.website,
        message: details.message,
        from_email: details.email
      }
    )
    .then((response) => {
      // Debug statement on the console to show the function has been executed successfully
      console.log(response);
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occurred
      console.log(error);
    });
};
// This file does not use a default export because it only exports the named function `sendCustomEmail`.
// Using named exports allows you to export multiple functions or variables from a module and import them selectively elsewhere.
// In this case, since only `sendCustomEmail` is exported and there is no need for a default export, a named export is used.
//
// Example usage in another file:
// import { sendCustomEmail } from './Tool/email';
//
// If you want to use a default export, you could write:
// export default sendCustomEmail;
// and then import it as:
// import sendCustomEmail from './Tool/email';
export { sendCustomEmail };
