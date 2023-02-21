import React from "react";
import "./WorkItem.css";

const WorkItem = ({ item }) => {
  return (
    <ul className="work-item">
      <li>
        <div className="dot"/>
        <p className="item-info">
          <span className="year">{item.year}</span>
          <span className="title">{item.title}</span>
          <span className="duration">{item.duration}</span>
        </p>
        <p className="details">{item.details}</p>
      </li>
    </ul>
  );
};

export default WorkItem;
