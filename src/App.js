import './App.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import hljs from 'highlight.js';
import chart from '@toast-ui/editor-plugin-chart';
import { Editor } from '@toast-ui/react-editor';
import React from 'react';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntaxPlugin from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

const MyComponent = () => (
    <Editor
        initialValue=""
        previewStyle="vertical"
        height="1000px"
        minHeight="100%"
        initialEditType="markdown"
        useCommandShortcut={ true }
        plugins={ [
            chart, codeSyntaxHighlightPlugin.bind(hljs), colorSyntaxPlugin, tableMergedCell, uml
        ] }
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
