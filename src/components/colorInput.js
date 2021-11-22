import React from 'react';

class ColorInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onColorChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>顏色</legend>
        <input type="color" value={this.props.default} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default ColorInput;
