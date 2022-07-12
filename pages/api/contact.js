import useDB from "../../helper/useDB";

const Handler = async (req, res) => {
  const { collection, client } = await useDB("contact");
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      if (
        !email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message ||
        message.trim() === ""
      ) {
        res.status(422).json({ message: "Invalid input" });
        return;
      }

      const newMessage = {
        name,
        email,
        message,
      };

      const result = await collection.insertOne(newMessage);
      console.log(result);

      client.close();

      res
        .status(201)
        .json({ message: "Successfully stored message!", result: result });
    }
  } catch (error) {
    client.close();
    return res
      .status(500)
      .json({ message: "Data operation failed", error: error });
  }
};

export default Handler;
