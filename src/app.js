import { useState } from 'react';

// Message Renderer
import Renderer from './renderer.js';

// Inputs
import ContentInput from './components/contentInput.js';
import AvatarInput from './components/avatarInput.js';
import ColorInput from './components/colorInput.js';
import TimeInput from './components/timeInput.js';
import LightInput from './components/lightInput.js';
import AttachmentInput from './components/attachmentInput.js';
import NameInput from './components/nameInput.js';

// Default Settings
import config from './default.json';

function random(array) {
  return array[~~(Math.random() * array.length)];
}

export default function App() {
  const now = new Date();
  const [content, setContent] = useState(random(config.content));
  const [name, setName] = useState('AC0xRPFS001');
  const [avatar, setAvatar] = useState('sena');
  const [color, setColor] = useState('#657c89');
  const [time, setTime] = useState(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`);
  const [light, setLight] = useState(false);
  const [attachment, setAttachment] = useState([]);

  const handleContentChange = value => {
    setContent(value);
  }

  const handleNameChange = value => {
    setName(value);
  }

  const handleAvatarChange = value => {
    setAvatar(value);
  }

  const handleColorChange = value => {
    setColor(value);
  }

  const handleTimeChange = value =>  {
    setTime(value);
  }

  const handleAttachmentChange = value => {
    setAttachment(value);
  }

  const handleEnableLightTheme = value => {
    setLight(value);
  }

  return (
    <>
      <header>
        <div id="title">AC 訊息產生器</div>
        <a href="https://github.com/kyometori/acgen">原始碼</a>
      </header>
      <div id="inputs">
        <LightInput default={light} onCheckChange={handleEnableLightTheme}/>
        <ColorInput default={color} onColorChange={handleColorChange}/>
        <NameInput default={name} onNameChange={handleNameChange} />
        <AvatarInput default={avatar} onAvatarChange={handleAvatarChange} />
        <TimeInput default={time} onTimeChange={handleTimeChange} />
        <AttachmentInput url={attachment} onAttachmentChange={handleAttachmentChange} />
        <ContentInput content={content} onContentChange={handleContentChange} />
        <Renderer
          name={name}
          content={content}
          avatar={avatar}
          color={color}
          timestamp={time}
          light={light}
          attachment={attachment}
        />
      </div>
    </>
  );
}
