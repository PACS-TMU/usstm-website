"use server";
import MailService from "@sendgrid/mail";

MailService.setApiKey(process.env.SENDGRID_API_KEY);

const verifiedSender = {
    email: process.env.SENDGRID_VERIFIED_SENDER_EMAIL,
    name: process.env.SENDGRID_VERIFIED_SENDER_NAME
}

export default async function handleForm(data) {

    const message = {
        to: verifiedSender,
        from: verifiedSender,
        subject: `New message from ${data.firstName} ${data.lastName}`,
        text: data.message,
        html: `<p>${data.message}</p>`
    }

    console.log(data);
    console.log("Sending message:\n", message);
}