import React from 'react';

class LightInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCheckChange(e.target.checked);
  }

  render() {
    return (
      <fieldset onChange={this.handleChange}>
        <legend>明亮背景</legend>
        <input type="checkbox" id="box" />
        <label htmlFor="box">開啟</label>
      </fieldset>
    )
  }
}

export default LightInput;
