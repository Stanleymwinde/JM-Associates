import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { Email, Fullname, Message, Phone, Company } = await request.json();

;

  //validate the request body
  if (!Email || !Fullname || !Message || !Phone || !Company) {
    return new NextResponse(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  //check if the Email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    return new NextResponse(JSON.stringify({ error: "Invalid Email address" }), {
      status: 400,
    });
  }


//   //send the email using nodemailer
 const transport = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.jmassociates.co.ke", // or your mail server's SMTP host
    port: 465,              // or 587 for TLS
    secure: true,           // true for port 465, false for port 587
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: "info@jmassociates.co.ke",
        // cc: Email, (uncomment this line if you want to send a copy to the sender)
        subject: `Website Quote Form with ${Company} as the subject`,
        text: `FullName: ${Fullname}  \nMessage: ${Message}`,
        };
    
        const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent");
                } else {
                    reject(err.message);
                }
            });
        });

        try {
            await sendMailPromise();
            return new Response(JSON.stringify({ Message: "Email sent", status: "success" }), { status: 200 });
        }
        catch (err) {
            return new Response(JSON.stringify({ Message: "Email not Sent", status: "error" }), { status: 500 });
        }
  }