const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please provide name, email and message." });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    return res.status(201).json({ message: "Message saved" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
