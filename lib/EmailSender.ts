import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
    user: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
});

export const emailConfermation=(email:string,link:string,support:string)=>{
   client.send({
       text: 'i hope this works',
       from:"Football Supputers",
       to:email,
       subject:"confirm your vote",
       attachment: [
           { data: templet(support,link), alternative: true },
       ],
   },(err) => {
       console.log(err);
   })

}


const templet=(suppot:string,link:string):string=>{return ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN"\n' +
    '        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
    '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"\n' +
    '      xmlns:v="urn:schemas-microsoft-com:vml" lang="en">\n' +
    '\n' +
    '<head>\n' +
    '    <link rel="stylesheet" type="text/css" hs-webfonts="true"\n' +
    '          href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi">\n' +
    '    <title>Email template</title>\n' +
    '    <meta property="og:title" content="Email template">\n' +
    '\n' +
    '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
    '\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '\n' +
    '    <style type="text/css">\n' +
    '\n' +
    '        a {\n' +
    '            text-decoration: underline;\n' +
    '            color: inherit;\n' +
    '            font-weight: bold;\n' +
    '            color: #253342;\n' +
    '        }\n' +
    '\n' +
    '        h1 {\n' +
    '            font-size: 56px;\n' +
    '        }\n' +
    '\n' +
    '        h2 {\n' +
    '            font-size: 28px;\n' +
    '            font-weight: 900;\n' +
    '        }\n' +
    '\n' +
    '        p {\n' +
    '            font-weight: 100;\n' +
    '        }\n' +
    '\n' +
    '        td {\n' +
    '            vertical-align: top;\n' +
    '        }\n' +
    '\n' +
    '        #email {\n' +
    '            margin: auto;\n' +
    '            width: 600px;\n' +
    '            background-color: white;}' +

    '        button {\n' +
    '            margin: 50px;\n' +
    '            align-self: center;\n' +
    '            font: inherit;\n' +
    '            background-color: #59baff;\n' +
    '            border: none;\n' +
    '            padding: 10px;\n' +
    '            text-transform: uppercase;\n' +
    '            letter-spacing: 2px;\n' +
    '            font-weight: 900;\n' +
    '            color: white;\n' +
    '            border-radius: 5px;\n' +

    '        }\n' +
    '        .div {\n' +
    '            position: relative;\n' +
    '            margin: auto;\n' +
    '            text-align: center;\n' +
    '        }\n' +

    '    </style>\n' +

    '</head>\n' +

    '<body bgcolor="#F5F8FA"\n' +
    '      style="width: 100%; margin: auto 0; padding:0; font-family:Lato, sans-serif; font-size:18px; color:#33475B; word-break:break-word">\n' +

    '<div id="email">\n' +

    '    <! Banner -->\n' +
    '    <table role="presentation" width="100%">\n' +
    '        <tr>\n' +

    '            <td align="center" style="color: white; padding:15px">\n' +
    '                <img alt="logo" title="logo" height="87"' +
    ' style="display: block" src="https://drive.google.com/uc?export=view&id=1hRfvw2UzszrNtm86rBflsYdFddksY1HG" width="100px" align="middle">\n' +

    '            </td>\n' +
    '    </table>\n' +

    '    <div class="div">\n' +

    '        <h2 align="center"> Welcome to Football supporter </h2>\n' +
    '        <p align="center">\n' +
    '            you support in world cup 2022\n' +
    '        </p>\n' +
    '        <h3 align="center">'+suppot+'</h3>\n' +
    '        <p align="center">\n' +
    '            please Confirme your vote from hier\n' +
    '        </p>\n' +
    '        <a href="'+link+'" >\n' +
    '            <button >\n' +
    '                Confirme\n' +
    '            </button>\n' +
    '        </a>\n' +

    '    </div>\n' +


    '</div>\n' +
    '</body>\n' +
    '</html>')}