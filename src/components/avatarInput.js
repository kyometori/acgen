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
      <fieldset onChange={this.handleChange}>
        <legend>頭像</legend>
        <input type="radio" name="avatar" id="new" value="sena" checked={this.state.check === "sena"} />
        <label htmlFor="new">聖奈</label>
        <input type="radio" name="avatar" id="old" value="diep" checked={this.state.check === "diep"} />
        <label htmlFor="old">Diep.io</label>
      </fieldset>
    )
  }
}

export default AvatarInput;
