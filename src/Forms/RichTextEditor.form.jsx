import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { RichUtils } from "draft-js";

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const boldClick = (e) => {
    e.preventDefault();
    let nextState = RichUtils.toggleInlineStyle(editorState, "BOLD");
    setEditorState(nextState);
    // setSelected("BOLD");
    console.log(editorState);
  };
  const italicClick = (e) => {
    e.preventDefault();
    let nextState = RichUtils.toggleInlineStyle(editorState, "ITALIC");
    setEditorState(nextState);
  };
  return (
    <div className="border-2 rounded-md border-black mt-5">
      <div className="p-4 border-2  border-black">
        <button onClick={boldClick}>
          <strong className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-l border border-gray-200 bg-white px-3 py-2 text-sm  text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 font-extrabold   ">
            B
          </strong>
        </button>
        <button onClick={italicClick}>
          <strong className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-l border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300   ">
            <em>Italic</em>
          </strong>
        </button>
        <button
          type="button"
          className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-l border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="40"
              y1="68"
              x2="216"
              y2="68"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="40"
              y1="108"
              x2="168"
              y2="108"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="40"
              y1="148"
              x2="216"
              y2="148"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="40"
              y1="188"
              x2="168"
              y2="188"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 256 256">
            <line
              x1="40"
              y1="68"
              x2="216"
              y2="68"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="64"
              y1="108"
              x2="192"
              y2="108"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="40"
              y1="148"
              x2="216"
              y2="148"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="64"
              y1="188"
              x2="192"
              y2="188"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-r border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 256 256">
            <line
              x1="40"
              y1="68"
              x2="216"
              y2="68"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="88"
              y1="108"
              x2="216"
              y2="108"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="40"
              y1="148"
              x2="216"
              y2="148"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="88"
              y1="188"
              x2="216"
              y2="188"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </button>
      </div>
      <div className="h-screen overflow-hidden px-3">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          onBlur={(e) => props.writeContent(e.target.innerText)}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
