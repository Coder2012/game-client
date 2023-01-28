import React from 'react';
import { RoomState } from '../../types';
import { Player } from '../Player/Player';

type Props = {
  room: RoomState | null;
  removePlayerClickHandler: (id: string) => void;
};

export const Players = ({ room, removePlayerClickHandler }: Props) => {
  return (
    <div>
      <p>Players</p>
      {room?.players?.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          colour={player.colour}
          name={player.name}
          score={player.score}
          canRemove={Boolean(room?.hostId && player.id !== room?.hostId)}
          clickHandler={() => removePlayerClickHandler(player.id)}
        />
      ))}
    </div>
  );
};
