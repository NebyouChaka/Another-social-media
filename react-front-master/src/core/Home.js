import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2 className="font-weight-bold">
       Hive
      </h2>
      <p className="lead">
       Real-time interactions, group conversations, or shared interests.
      </p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
