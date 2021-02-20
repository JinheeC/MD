import './App.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import chart from '@toast-ui/editor-plugin-chart';
import { Editor } from '@toast-ui/react-editor';
import React from 'react';

const MyComponent = () => (
    <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="1000px"
        initialEditType="markdown"
        useCommandShortcut={ true }
        plugins={ [ chart ] }
    />
);

function App() {
    return (
        <div className="App">
            <MyComponent/>
        </div>
    );
}

export default App;
