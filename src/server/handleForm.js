"use server";
import MailService from "@sendgrid/mail";

MailService.setApiKey(process.env.SENDGRID_API_KEY);

const verifiedSender = {
    email: process.env.SENDGRID_VERIFIED_SENDER_EMAIL,
    name: process.env.SENDGRID_VERIFIED_SENDER_NAME
}

export default async function handleForm(data) {
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const tmuEmail = data.get("tmuEmail");
    const program = data.get("program");
    const year = data.get("year");
    const natureOfRequest = data.get("natureOfRequest");
    const subject = data.get("subject");
    const description = data.get("description");
    let reciever;

    switch (natureOfRequest) {
        case "Finance Request": 
            reciever = process.env.VP_FINANCE_EMAIL;
            break;
        case "Locker Request":
            reciever = process.env.VP_OPS_EMAIL;
            break;
        case "Website Request":
            reciever = [process.env.VP_OPS_EMAIL, process.env.PACS_EMAIL];
            break;
        case "Merchandise Request":
            reciever = process.env.VP_COMMS_EMAIL;
            break;
        case "Science Lounge Booking":
            reciever = process.env.VP_OPS_EMAIL;
            break;
        case "Events Request":
            reciever = process.env.VP_EVENTS_EMAIL;
            break;
        case "Academics Request":
            reciever = process.env.VP_ACADEMICS_EMAIL;
            break;
        case "Equity Request":
            reciever = process.env.VP_EQUITY_EMAIL;
            break;
        case "General Inquiry":
            reciever = process.env.VP_OPS_EMAIL;
            break;
        default:
            //not valid nature of request
            console.error("Invalid nature of request");
            break;
    }

    const msg = {
        to: reciever,
        from: verifiedSender,
        replyTo: {
            email: tmuEmail,
            name: `${firstName} ${lastName}`
        },
        subject: `[Website Contact Form] - ${subject}`,
        text: `Sender: ${firstName} ${lastName}\n\n
        TMU Email: ${tmuEmail}\n\n
        Program & Year: ${program} - ${year}\n\n
        Nature of Request: ${natureOfRequest}\n\n
        Description:\n${description}\n`,
        html: `Sender: ${firstName} ${lastName}<br /><br />
        TMU Email: ${tmuEmail}<br /><br />
        Program & Year: ${program} - ${year}<br /><br />
        Nature of Request: ${natureOfRequest}<br /><br />
        Description:<br />${description}<br /><br />`
    };

    try {
        await MailService.send(msg);
        console.log("Email sent");
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
}