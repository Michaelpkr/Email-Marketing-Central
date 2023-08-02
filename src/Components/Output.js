export default function Output(props) {
	const { formInput, currentHTML } = props;
	const api_key = "pk_c5e29e3c4ab9aa01185a8c05f84bc219ab";

	console.log(formInput)

	const renderHTML = Object.entries(formInput).reduce(
	  (html, [key, value]) => {
		return html.replace(new RegExp(key, 'g'), value.placeholder);
	  },
	  currentHTML
	);

	return (
	  <div className="outputDiv">
		<div className="htmlRendering" dangerouslySetInnerHTML={{ __html: renderHTML }} />
		<button className="klaviyoBtn">Send to Klaviyo</button>
	  </div>
	);
  }
