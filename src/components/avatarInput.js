import React from 'react';

class AvatarInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { check: props.default };
  }

  handleChange(e) {
    this.setState({ check: e.target.value });
    this.props.onAvatarChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>頭像</legend>
        <input type="radio" name="avatar" id="chocomint" value="chocomint" onChange={this.handleChange} checked={this.state.check === "chocomint"} />
        <label htmlFor="chocomint">Chocomint</label>
        <input type="radio" name="avatar" id="sena" value="sena" onChange={this.handleChange} checked={this.state.check === "sena"} />
        <label htmlFor="sena">聖奈</label>
        <input type="radio" name="avatar" id="diep" value="diep" onChange={this.handleChange} checked={this.state.check === "diep"} />
        <label htmlFor="diep">Diep.io</label>
      </fieldset>
    )
  }
}

export default AvatarInput;
