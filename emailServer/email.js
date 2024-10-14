import nodemailer from "nodemailer";

// email configurations
const transporter = nodemailer.createTransport({
  host: "mail.raphaelnetsolutions.com",
  port: 465,
  secure: true,
});

async function sendMail(email, data) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"WEBSITE" <admin@raphaelnetsolutions.com>', // sender address
    to: email, // list of receivers
    subject: "Client Qoute", // Subject line
    // text: "Find the given information important", // plain text body
    html: `<!doctype html>
<html ⚡4email data-css-strict>
 
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <style amp4email-boilerplate>
    body {
      visibility: hidden
    }
  </style>

  <script async src="https://cdn.ampproject.org/v0.js"></script>


  <style amp-custom>
    @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px;
      }
      .u-row .u-col {
        vertical-align: top;
      }
      .u-row .u-col-100 {
        width: 600px;
      }
    }
    
    @media only screen and (max-width: 620px) {
      .u-row {
        width: 100%;
      }
      .u-row .u-col {
        display: block;
        width: 100%;
        min-width: 320px;
        max-width: 100%;
      }
      .u-row .u-col>div {
        margin: 0 auto;
      }
      .u-row .u-col img {
        max-width: 100%;
      }
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    table,
    td {
      color: #000000;
    }
    
    #u_body a {
      color: #0000ee;
      text-decoration: underline;
    }
  </style>


</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;background-color: #f9f9f9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->

          <div style="padding: 0px;">
            <div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;">
              <div class="u-row">

                <div class="u-col u-col-100" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  <div style="width: 100%;padding:0px;">

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 160%; text-align: center; word-wrap: break-word;">
                              <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px;">Hi, you have received a qoute from.</span></p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">Name: ${data.name} </p>
                            </div> 

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">Email: ${data.email}</p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">Mobile.No: ${data.mobile}</p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">Freight: ${data.freightType}</p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">note: ${data.note}. </p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div style="padding: 0px;">
            <div style="max-width: 600px;margin: 0 auto;">
              <div class="u-row">

                <div class="u-col u-col-100" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
                  <div style="width: 100%;padding:0px;">

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                              <p style="line-height: 140%;">Best Regards, </p>
                              <h5>Raphael Mwendwa |&nbsp;Operations Manager | Raphael net solutions - Kiambu -Githura</h5>
                              <div>&nbsp;</div>
                              <p style="line-height: 140%;">&nbsp;</p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div style="padding: 0px;">
            <div style="max-width: 600px;margin: 0 auto;background-color: #e5eaf5;">
              <div class="u-row">

                <div class="u-col u-col-100" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  <div style="width: 100%;padding:0px;">

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; color: #000000; line-height: 160%; text-align: center; word-wrap: break-word;">
                              <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px;"><strong>Get in touch</strong></span></p>
                              <p style="line-height: 160%;"><span style="color: #000000; line-height: 22.4px;"><span style="font-size: 16px; line-height: 25.6px;">+254717648579</span></span>
                              </p>
                              <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">admin@raphaelnetsolutions.com</span></p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 33px;font-family:'Cabin',sans-serif;" align="left">
                            <div style="text-align:center;line-height:0px">
                              <a href="https://facebook.com/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" width="32" height="32" />
                              </a>
                              <a href="https://linkedin.com/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" width="32" height="32" />
                              </a>
                              <a href="https://instagram.com/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" width="32" height="32" />
                              </a>
                              <a href="https://youtube.com/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:17px">
                                <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" width="32" height="32" />
                              </a>
                              <a href="mailto:https://email.com/" target="_blank" style="display:inline-block;width:32px;height:32px;margin-right:0px">
                                <amp-img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" width="32" height="32" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div style="padding: 0px;">
            <div style="max-width: 600px;margin: 0 auto;background-color: #003399;">
              <div class="u-row">

                <div class="u-col u-col-100" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  <div style="width: 100%;padding:0px;">

                    <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

                            <div style="font-size: 14px; color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                              <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">Copyrights © Raphael net solutions All Rights Reserved</span></p>
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html> `,
  });

  console.log("Message sent: %s", info.messageId);
}

export default sendMail;
