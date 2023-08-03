import React, { useState } from 'react';

export default function Output(props) {
  const { formInput, currentHTML } = props;
  const api_key = "pk_c5e29e3c4ab9aa01185a8c05f84bc219ab";

  const renderHTML = Object.entries(formInput).reduce(
    (html, [key, value]) => {
      return html.replace(new RegExp(key, 'g'), value.placeholder);
    },
    currentHTML
  );

  const copyToClipboard = () => {
    // Create a temporary textarea element to hold the text to be copied
    const textarea = document.createElement('textarea');
    textarea.value = renderHTML;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);
  };

  return (
    <div className="outputDiv">
      <div className="htmlRendering" dangerouslySetInnerHTML={{ __html: renderHTML }} />
      <button className="klaviyoBtn" onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
}
