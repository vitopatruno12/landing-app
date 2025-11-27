const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-order", async (req, res) => {
  const { nome, telefono, ordine } = req.body;

  const transporter = nodemailer.createTransport({
      host: "smtp.libero.it",
  port: 465,        // usa 465 se vuoi SSL
  secure: true,    // true se port=465
    auth: {
      user: "red13m@libero.it",
      pass: "Dicembre2023@@$01",
    },
  });

  const mailOptions = {
    from: "red13m@libero.it",
    to: "red13m@libero.it",
    subject: "Nuovo ordine dal sito",
    text: `Nome: ${nome}\nTelefono: ${telefono}\nOrdine: ${ordine}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err });
  }
});

app.listen(5000, () => console.log("Server attivo sulla porta 5000"));
