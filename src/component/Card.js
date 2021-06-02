import React from "react";

function Card({ user }) {
  return (
    <div>
      <div className="card">
        <img src={user.avatar_url} alt="" />
        <div className="text">
          <h3>{user.login}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            officiis, corporis magni architecto minima unde!
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            /* background-color: coral; */
            margin: 15px;
            border: none;
            box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
            border-radius: 20px;
            text-align: center;
            width: 250px;
            transition: transform 0.2s ease-in;
          }

          .card:hover {
            /* background-color: coral; */
            transform: translateY(-5px);
            box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);
          }

          .card > img {
            width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 70px;
          }

          .text > button {
            margin: 20px;
            padding: 8px 20px;
            border-radius: 4px;
            outline: none;
            border: none;
            font-size: 18px;
            color: #fff;
            background-color: #1888ff;
            cursor: pointer;
            text-transform: uppercase;
          }

          .text > button:active {
            background-color: #1888ff;
            opacity: 50%;
          }
        `}
      </style>
    </div>
  );
}

export default Card;
