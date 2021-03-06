import React from 'react';
import avatar_sena from './asset/avatar-sena.png';
import avatar_diep from './asset/avatar-diep.png';
import avatar_chocomint from './asset/avatar-chocomint.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
} from '@skyra/discord-components-react';

const avatar = {
  sena: avatar_sena,
  diep: avatar_diep,
  chocomint: avatar_chocomint
}

export default function Renderer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light} id="renderer">
      <DiscordMessage
        author={props.name}
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
        <div>
        {
        /\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(props.attachment) ?
          <DiscordAttachment
            slot="attachments"
            url={props.attachment}
            style={{ maxWidth: '256px' }}
            alt="attachment"
          /> : ""
        }
        </div>
      </DiscordMessage>
    </DiscordMessages>
  );
}
