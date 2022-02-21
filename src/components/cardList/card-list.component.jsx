import React from "react";
import "../cardList/card-list.styles.css";
import { Card } from "../card/card.component";
export const Cardlist = props => {
  return (
    <div className="card-list">
        {props.monsters.map(monster => 
            (
              <Card monster={monster} />
            )
        )}
      </div>
  )
};
