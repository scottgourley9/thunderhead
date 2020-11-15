import nodemailer from 'nodemailer';

export default (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 465,
            secure: true,
            auth: {
                user: 'apikey',
                pass: process.env.sengGridApiKey
            }
        });
        const mailOptions = {
            from: 'scottgourley9@gmail.com',
            to: 'scottgourley9@zohomail.com',
            subject: 'Interested Customer',
            html: `
                <h4>${req.body.name}</h4>
                <h4>${req.body.email}</h4>
                <h4>${req.body.phone}</h4>
                <h4>${req.body.company}</h4>
            `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(info);
            }
        });
    } catch (e) {
        res.status(500).json('Error');
    }
}
