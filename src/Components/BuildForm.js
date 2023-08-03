import { Link } from "react-router-dom";
import Output from "./Output";
import { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BuildForm(props) {
  const fields = Object.entries(props.currentTemplate.fields);
  const [formInput, setFormInput] = useState({});
  const modules =  {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link'],
      ['clean'],
      [{
        'color': ['#0073b9']
      }]
    ],
  }


  function textAreaChangeHandler(e) {
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [e.target.placeholder]: {
        value: e.target.placeholder,
        placeholder: e.target.value,
      },
    }));
  }

  function changeHandler(field, content, delta, source, editor) {
    console.log(field, content)
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [field[0]]: {
        value: editor.getText(),
        placeholder: content,
      },
    }));
  }

  console.log(formInput)

  return (
    <div>
      <Link to="/"><button>Back to Templates</button></Link>

      <h1>Enter your content here:</h1>
      <div className="buildFormDiv">
        <form className="buildForm">
          {fields.map(field => (
            <div>
              {field[1].editable == true ?
              <ReactQuill
                theme="snow"
                modules={modules}
                name={field[0]}
                onChange={(content, delta, source, editor) => changeHandler(field, content, delta, source, editor)}
                key={field[0]}
                placeholder={field[0]}
              /> :
              <textarea onChange={textAreaChangeHandler} placeholder={field[0]}></textarea>}

            </div>
          ))}
        </form>
        <Output formInput={formInput} currentHTML={props.currentHTML} setsCurrentHTML={props.setsCurrentHTML} />
      </div>
    </div>
  );
}
