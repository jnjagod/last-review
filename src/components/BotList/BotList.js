import React from "react";
import Bot from "../Bot/Bot";

export default function BotList(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      {props.bots.map(bot => {
        return <Bot key={bot.id} bot={bot} delete={props.delete} />;
      })}
    </div>
  );
}
