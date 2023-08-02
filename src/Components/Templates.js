import emailtemplates from "./emailtemplates";
import { Link } from "react-router-dom";

export default function Templates(props){
	let emailTemplateElements = emailtemplates.map(template => {
		function handleClick(){
			props.setsCurrentTemplate(template)
			props.setsCurrentHTML(template.shellHTML)
		}
		return(
			<div>
			<div className="templates" key={template.name}>
				<img width="100px" src={template.img}/>
				<h2>{template.name}</h2>
				<Link to="/build">
				<button onClick={handleClick}>Build</button>
				</Link>
			</div>
			</div>)
	})

	return(
		<div>

		<h1>Email Marketing Central</h1>
		<h2>Select your template:</h2>
		<div className="templatesDiv">
			{emailTemplateElements}
		</div>
		</div>
	)
}