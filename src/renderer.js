import React from 'react';
import avatar_rinko_special_birthday from './asset/avatar-rinko-special-birthday.png';
import avatar_sena_how_about_me_like_this from './asset/avatar-sena-how-about-me-like-this.png';
import avatar_sena_shiawase from './asset/avatar-sena-shiawase.png';
import avatar_sena_julietta from './asset/avatar-sena-julietta.png'
import avatar_diep from './asset/avatar-diep.png';
import avatar_chocomint from './asset/avatar-chocomint.png';

import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
} from '@skyra/discord-components-react';

const avatar = {
  rinko_special_birthday: avatar_rinko_special_birthday, 
  sena_how_about_me_like_this: avatar_sena_how_about_me_like_this, 
  sena_shiawase: avatar_sena_shiawase,
  sena_julietta: avatar_sena_julietta,
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
        <div>
          {""}
          {props.content}
        </div>
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
