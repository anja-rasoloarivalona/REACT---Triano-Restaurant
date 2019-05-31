import React from "react";
import classes from "./Team.css";
import chef1 from "../../../Assets/img/about/chef1.png";
import chef2 from "../../../Assets/img/about/chef2.png";
import chef3 from "../../../Assets/img/about/chef3.png";
import teamBg from "../../../Assets/img/about/teamBg.jpg";

const team = () => {
  return (
    <section
      className={classes.TeamContainer}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" +
          teamBg +
          ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className={classes.Team}>
        <div className={classes.TeamImgContainer}>
          <img src={chef1} className={classes.TeamImg} />
        </div>
        <div className={classes.TeamName}>
          <div>John Doe</div>
        </div>
      </div>
      <div className={classes.Team}>
        <div className={classes.TeamImgContainer}>
          <img src={chef2} className={classes.TeamImg} />
        </div>
        <div className={classes.TeamName}>
          <div>Fred Doe</div>
        </div>
      </div>
      <div className={classes.Team}>
        <div className={classes.TeamImgContainer}>
          <img src={chef3} className={classes.TeamImg} />
        </div>
        <div className={classes.TeamName}>
          <div>Jeanne Doe</div>
        </div>
      </div>
    </section>
  );
};

export default team;
