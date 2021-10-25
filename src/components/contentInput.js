import React from 'react';

class ContentInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onContentChange(e.target.value);
  }

  render() {
    const { content } = this.props;
    return (
      <fieldset>
        <legend>訊息內容</legend>
        <input
          type="text"
          value={content}
          onChange={this.handleChange}
          style={{
            width: '80vw',
            height: '30px'
          }}
        />
      </fieldset>
    );
  }
}

export default ContentInput
