import "./top.css";
import "chartjs-plugin-datalabels";
import TasteChart from "./chart";
import { CiBookmarkPlus, CiBookmarkCheck } from "react-icons/ci";
import { useState } from "react";
import placeholderImage from "../../assets/placeholder.png";

export default function TopContainer({ data, setFav }) {
  console.log(data);
  const [check, setCheck] = useState(false);
  function click() {
    setFav(data.id, data.image, data.title, data.summary);
    setCheck(true);
  }
  return (
    <div className="top-container-info">
      {check ? (
        <CiBookmarkCheck onClick={() => click()} className="icon-info check" />
      ) : (
        <CiBookmarkPlus onClick={() => click()} className="icon-info" />
      )}
      <div className="top-container-head-info">
        <div className="top-container-head-left-info">
          <img
            src={data.image}
            alt={data.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholderImage;
            }}
          />
        </div>

        <div className="top-container-head-right-info">
          <div className="top-container-head-right-title-info">
            {data.title}
          </div>
          <div className="top-container-head-right-body-info">
            <ul>
              <li>Preparation Time: {data.readyInMinutes} minutes</li>
              <li>Servings: {data.servings}</li>
              <li>Health Score: {data.healthScore}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="top-container-footer-info">
        {data.taste &&
          Object.entries(data.taste).map(([tasteProperty, value]) => (
            <div key={tasteProperty} className="Chart">
              <TasteChart
                key={tasteProperty}
                name={tasteProperty}
                value={value}
              />
              <div className="Chart-undertext">{tasteProperty}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
