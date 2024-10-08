import { sendMail } from "../../../service/mailService";
const handler = async (req, res) => {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        const { email, message, number, place, name } = body;
        await sendMail(email, message, number, place, name);
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end("Method Not Allowed");
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
