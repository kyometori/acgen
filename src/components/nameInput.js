import React from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>名稱</legend>
        <select onChange={this.handleChange}>
          <option value="AC0xRPFS001">AC0xRPFS001</option>
          <option value="chocomint">chocomint</option>
          <option value="chocomint++">chocomint++</option>
        </select>
      </fieldset>
    )
  }
}

export default NameInput;
