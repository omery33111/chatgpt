import { createTransport } from "nodemailer"



const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        let transport = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_ID,
            },
        });
    
        await transport.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            html
        })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default sendEmail;
