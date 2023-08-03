import { Link } from "react-router-dom";
import Output from "./Output";
import { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BuildForm(props) {
  const fields = Object.keys(props.currentTemplate.fields);
  const [formInput, setFormInput] = useState({});
  const modules =  {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link'],
      ['clean']
    ],
  }

  function changeHandler(field, content, delta, source, editor) {
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [field]: {
        value: editor.getText(),
        placeholder: content,
      },
    }));
  }

  return (
    <div>
      <Link to="/"><button>Back to Templates</button></Link>

      <h1>Enter your content here:</h1>
      <div className="buildFormDiv">
        <form className="buildForm">
          {fields.map(field => (
            <div>
            <ReactQuill
              theme="snow"
              modules={modules}
              name={field}
              onChange={(content, delta, source, editor) => changeHandler(field, content, delta, source, editor)}
              key={field}
              placeholder={field}
            />
            </div>
          ))}
        </form>
        <Output formInput={formInput} currentHTML={props.currentHTML} setsCurrentHTML={props.setsCurrentHTML} />
      </div>
    </div>
  );
}
