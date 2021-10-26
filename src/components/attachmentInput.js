import React from 'react';

class AttachmentInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAttachmentChange(e.target.value);
  }

  render() {
    const { url } = this.props;
    return (
      <fieldset>
        <legend>附件圖片網址（對，只能一張圖片，麻煩用副檔名結尾）</legend>
        <input
          type="text"
          value={url}
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

export default AttachmentInput;
