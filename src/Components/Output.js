import React, { useState } from 'react';

export default function Output(props) {
  const { formInput, currentHTML } = props;

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

    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    document.body.removeChild(textarea);
  };

  return (
    <div className="outputDiv">
      <div className="htmlRendering" dangerouslySetInnerHTML={{ __html: renderHTML }} />
      <button className="klaviyoBtn" onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
}
