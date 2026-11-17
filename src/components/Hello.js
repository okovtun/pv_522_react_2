import React from 'react';

class Hello extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			text: "Hello",
			btnText:"Перевести"
		}
	}

	changeText = () =>
	{
		this.setState({ text: this.state.text === "Привет" ? "Hello" : "Привет"});
		this.setState({ btnText: this.state.text === "Hello" ? "Translate" : "Перевести"});
	}

	render()
	{
		return (
			<>
				<h2>{this.state.text}</h2>
				<button onClick={this.changeText}>{ this.state.btnText }</button>
			</>
		)
	}
}
export default Hello;