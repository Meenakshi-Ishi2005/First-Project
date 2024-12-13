const express = require("express");
const { CompileFile } = require("ve-compiler");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/compile", async (req, res) => {
  const { code, language } = req.body;

  console.log("Received:", { code, language }); // Debugging
  if (!code || !language) {
    return res.status(400).json({ error: "Missing 'code' or 'language'." });
  }

  try {
    const output = await CompileFile(language, code);
    console.log("Compile Output:", output); // Debugging
    res.json({ message: output?.stdout || "No output received." });
  } catch (error) {
    console.error("Compilation Error:", error.stack || error); // Debugging
    res.status(500).json({ error: "An error occurred during compilation." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
