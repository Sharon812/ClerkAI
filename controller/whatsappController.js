export const handleIncomingMessage = async (req, res) => {
  try {
    const message = req.body.Body;
    const from = req.body.From;

    console.log("Incoming:", message, "from", from);

    res.set("Content-Type", "text/xml");
    res.send(`
        <Response>
          <Message>
            👋 Hi! I'm ClerkAI. I can help you book appointments.
          </Message>
        </Response>
      `);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
