import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  //dump the request body to the console
  // console.log('Request body:', request.body);
  //parse the request body as JSON

  const { Email, Fullname, Message, Subject } = await request.json();
  //validate the request body
  if (!Email || !Fullname || !Message || !Subject) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }
  //check if the Email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    return NextResponse.json({ error: 'Invalid Email address' }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: "stanmwinde@gmail.com",
    // cc: Email, (uncomment this line if you want to send a copy to the sender)
    // Subject: `Message from ${Fullname} (${Email})`,
    subject: `Website Contact Form with ${Subject} as the subject`,
    text: `FullName: ${Fullname}  \nMessage: ${Message}`,
  
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ Message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}