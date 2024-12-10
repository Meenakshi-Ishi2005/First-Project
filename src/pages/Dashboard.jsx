import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';


function Dashboard() {
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
        console.log(monaco)
      }

      function showValue() {
        const code = (editorRef.current.getValue());
        alert(code)
      }
    return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This page is protected and only accessible when signed in.</p>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default Dashboard;
