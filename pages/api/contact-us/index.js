import nc from "next-connect";
import sendEmail from "@/utils/sendEmail";
const handler = nc();

handler.post(async (req, res) => {
  const { from, to, subject, message } = req.body;
  console.log(req.body);
  try {
    const result = await sendEmail({
      from: from,
      to: to,
      subject: subject,
      html: `<b>From: ${from}</b><br><b>Message: </b>${message} <br>`,
    });
    console.log(result);
    res.send({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default handler;
