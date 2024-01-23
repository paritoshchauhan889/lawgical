import multer from "multer";
import nc from "next-connect";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import sendEmail from "@/utils/sendEmail";
const handler = nc();

//send file with attachment key name
handler.use(upload.single("attachment"));

handler.post(async (req, res) => {
  console.log(req.file);
  const { buffer } = req.file;
  const { from, to, subject, message, personDetails } = req.body;
  let personData = JSON.parse(personDetails);

  try {
    await sendEmail({
      from: from,
      to: to,
      subject: subject,
      html: `<b>This is email is sent by ${from}</b> <br>
      Full Name: ${personData?.firstName} ${personData.lastName} <br>
      Contact Number: ${personData.contactNumber} <br>
      City: ${personData.city} <br>
      State: ${personData.state} <br>
      Country: ${personData.country} <br>
      Selected Job Type: ${personData.jobType} <br>
      Selected Experties Area: ${personData.expertiseArea} <br>
      Description: ${personData.description} <br>`,
      attachments: {
        filename: req.file.originalname,
        content: buffer.toString("base64"),
        encoding: "base64",
      },
    });
    res.send({
      success: true,
      message: "Mail sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: error,
    });
  }
});

export default handler;

export var config = {
  api: {
    bodyParser: false,
  },
};
