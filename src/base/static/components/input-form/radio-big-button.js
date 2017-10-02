import React, { Component } from "react";

import { RadioField } from "../form-fields/radio-field";

const baseClass = "radio-big-button";

class RadioBigButton extends Component {
	render() {
		return (
			<div className={baseClass}>
				<RadioField 
					id={this.props.id}
					name={this.props.name}
					defaultChecked={this.props.defaultChecked}
					required={this.props.required}>
				</RadioField>
				<label
					htmlFor={this.props.id}>
					{this.props.label}
				</label>
			</div>
		);
	}
};

export { RadioBigButton };