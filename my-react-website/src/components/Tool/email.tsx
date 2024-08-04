import emailjs from "@emailjs/browser";

// Define an interface for the details parameter to ensure it receives the correct types
interface EmailDetails {
  to_email: string;
  subject: string;
  message: string;
}

const sendCustomEmail = (details: EmailDetails): void => {
  // Initialize using your User ID saved in the .env file
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID as string);

  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID as string,  // The service ID saved in the .env file
      import.meta.env.VITE_EMAIL_TEMPLATE_ID as string, // The template ID also saved in the .env file
      {
        to_email: details.to_email,
        subject: details.subject,
        message: details.message,
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

export { sendCustomEmail };
