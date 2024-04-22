const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shivaprasadshetty112:shetty2002@cluster0.igi7fpr.mongodb.net/chatbot",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));
