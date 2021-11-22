import React from 'react';

class AvatarInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAvatarChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
          <legend>頭像</legend>
          <select onChange={this.handleChange}>
            <option value="sena">聖奈</option>
            <option value="diep">Diep.io</option>
            <option value="chocomint">chocomint</option>
          </select>
      </fieldset>
    )
  }
}

export default AvatarInput;
