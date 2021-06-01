import React from "react";
import Card from "./Card";
import { users } from "../Utils/usersMockData";

function CardList() {
  return (
    <div className="card-container">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}

      <style jsx>
        {`
          .card-container {
            margin: 15px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
          }
        `}
      </style>
    </div>
  );
}

export default CardList;
