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
      [{
        'color': ['#f5f7f8', '#e8eced', '#d5d9db', '#b6bec2', '#8e999e', '#69757a', '#495257',
                  '#ffc6e6', '#ff93cf', '#f863b7', '#ed3d9f', '#e30a8d', '#c40879', '#770644',
                  '#ffc7f2', '#f59de2', '#e07ecb', '#d160b7', '#b34fa0', '#964286', '#773569',
                  '#d8c7ff', '#b69df5', '#9379e0', '#7b62cc', '#634fb3', '#534296', '#44367b',
                  '#ade9ff', '#61d5ff', '#00b2f6', '#0091d9', '#0073b9', '#005b98', '#004477',
                  '#adffff', '#75f8fc',	'#3bebf5', '#00d6e6',	'#00b6c7', '#0097a8',	'#007384',
                  '#adfff4', '#67f5e2', '#2de0c8', '#1cc8b4', '#16a597', '#0e8e7e', '#077565',
                  '#adffbe', '#83f295', '#5ae072', '#48ce65', '#35bd59', '#24a344', '#1b8533',
                  '#e5ffa8', '#cdf383', '#b3e65c', '#a0d64a', '#8ec738', '#73ab29', '#588f1a',
                  '#fff6a8', '#ffec82', '#ffe45e', '#ffda47', '#fcd214', '#e3b409', '#b88907',
                  '#ffe6a8', '#ffd784', '#ffc95e', '#fdba40', '#faab19', '#e3900b', '#b86b07',
                  '#ffd3ad', '#feb881', '#fa9f5a', '#f58331', '#e66f20', '#c95a14', '#a6400d',
                  '#ffc4b8', '#ff9c8c', '#fa7c69', '#f26552', '#e64b40', '#cc392f', '#a62b24'
                ]
      }],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link'],
      ['clean'],
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
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [field[0]]: {
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
              {field[1].editable === true ?
              <ReactQuill
                theme="snow"
                modules={modules}
                name={field[0]}
                onChange={(content, delta, source, editor) => changeHandler(field, content, delta, source, editor)}
                key={field[0]}
                placeholder={field[0]}
              /> :
              <textarea onChange={textAreaChangeHandler} placeholder={field[0]}></textarea>
            }
            </div>
          ))}
        </form>
        <Output formInput={formInput} currentHTML={props.currentHTML} setsCurrentHTML={props.setsCurrentHTML} />
      </div>
    </div>
  );
}