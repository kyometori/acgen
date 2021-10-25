import React from 'react';
import avatar_sena from './asset/avatar-sena.png';
import avatar_diep from './asset/avatar-diep.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordMention
} from "@skyra/discord-components-react";

const avatar = {
  sena: avatar_sena,
  diep: avatar_diep
}

export default function Rederer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light}>
      <DiscordMessage
        author="AC0xRPFS001"
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
      </DiscordMessage>
    </DiscordMessages>
  );
}
