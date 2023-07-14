import { Link } from "react-router-dom";
import Output from "./Output";

export default function BuildForm(props){
	let fields = Object.keys(props.currentTemplate.fields)
	props.setsCurrentHTML(props.currentTemplate.shellHTML)

	function changeHandler(e){
		props.setsFormInput({...props.formInput,
		[e.target.name]: e.target.value});
	}

	return(
		<div>
			<Link to="/"><button>Back to Templates</button></Link>
			<h1>Enter your content here:</h1>
			<div className="buildFormDiv">
				<form className="buildForm">
					{fields.map(field => {
						return (<textarea onChange={changeHandler} name={field} key={field} placeholder={field}></textarea>)
					})}
				</form>
				<Output formInput={props.formInput} currentHTML={props.currentHTML} setsCurrentHTML={props.setsCurrentHTML}/>
			</div>
		</div>
	)
}