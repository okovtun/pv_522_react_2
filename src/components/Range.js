import React from 'react';

class Range extends React.Component
{
	state =
		{
			value:"85"
		}

	setValue = (event) =>
	{
		this.setState({ value:event.target.value })
	}

	render()
	{
		return (
			<>
				<input type="range"
					min="15" max="200"
					value={this.state.value}
					onInput={this.setValue}
				/>
				<div>{ this.state.value }</div>
			</>
		)
	}
}
export default Range;