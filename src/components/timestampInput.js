import React from 'react';

class TimestampInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTimestampChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>時間點</legend>
        <input type="text" value={this.props.default} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

export default TimestampInput;
