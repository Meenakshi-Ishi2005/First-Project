import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";

export function Dashboard() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState(""); // State to store the output
  const [language, setLanguage] = useState("python"); // Default language is Python

  // Handle editor mount
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor; // Store editor instance in ref
  };

  // Handle language selection
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Run code and send it to the backend
  const runCode = async () => {
    if (!editorRef.current) {
      alert("Editor is not ready yet.");
      return;
    }

    const code = editorRef.current.getValue(); // Get the current value of the editor

    try {
      const response = await axios.post("http://localhost:4000/compile", {
        code,
        language: language === "python" ? "py" : language, // Convert language if needed
      });

      setOutput(response.data.message || "No output received.");
    } catch (error) {
      console.error("Error during code execution:", error);
      if (error.response) {
        setOutput(`Error: ${error.response.data.error}`);
      } else {
        setOutput(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="Dashboard">
      <div style={{ display: "flex", height: "90vh" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="language-select">Select Language:</label>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              style={{ marginLeft: "10px" }}
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="c">C</option>
            </select>
          </div>
          <Editor
            height="80vh"
            defaultLanguage="python" // Set default language to Python
            defaultValue="# Write your Python code here"
            onMount={handleEditorDidMount}
          />
          <button
            onClick={runCode}
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Run Code
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Output:</h2>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minHeight: "80vh",
              overflow: "auto",
            }}
          >
            {output.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
