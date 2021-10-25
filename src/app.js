import React from 'react';
import Renderer from './renderer.js';

// Components
import ContentInput from './components/contentInput.js';
import AvatarInput from './components/avatarInput.js';
import ColorInput from './components/colorInput.js';
import TimestampInput from './components/timestampInput.js';
import LightInput from './components/lightInput.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTimestampChange = this.handleTimestampChange.bind(this);
    this.handleEnableLightTheme = this.handleEnableLightTheme.bind(this);

    const now = new Date();
    this.state = {
      content: '對，你可以用它產生各種我沒說過的話，爽了嗎',
      avatar: 'sena',
      color: '#657c89',
      timestamp: `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`,
      light: false
    }

  }

  handleContentChange(value) {
    this.setState({ content: value });
  }

  handleAvatarChange(value) {
    this.setState({ avatar: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }

  handleTimestampChange(value) {
    this.setState({ timestamp: value });
  }

  handleEnableLightTheme(value) {
    this.setState({ light: value });
  }

  render() {
    const { content, avatar, color, timestamp, light } = this.state;

    return (
      <React.Fragment>
        <h1>AC 訊息產生器</h1>
        <div style={{ margin: '30px 0' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%'
          }} className="column">
            <LightInput default={color} onCheckChange={this.handleEnableLightTheme}/>
            <ColorInput default={color} onColorChange={this.handleColorChange}/>
            <AvatarInput default={avatar} onAvatarChange={this.handleAvatarChange} />
            <TimestampInput default={timestamp} onTimestampChange={this.handleTimestampChange} />
          </div>
          <div style={{ margin: '10px' }}>
            <ContentInput content={content} onContentChange={this.handleContentChange} />
          </div>
        </div>
        <hr />
        <Renderer content={content} avatar={avatar} color={color} timestamp={timestamp} light={light}/>
      </React.Fragment>
    );
  }
}

export default App;
