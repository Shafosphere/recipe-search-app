import "./top.css"
import 'chartjs-plugin-datalabels'; // Optional: For displaying labels
import TasteChart from "./chart";

import { CiBookmarkPlus } from "react-icons/ci";
export default function TopContainer({ data }) {
    return (
        <div className="top-container-info">
            <CiBookmarkPlus className="icon-info" />
            <div className="top-container-head-info">

                <div className="top-container-head-left-info">
                    <img src={data.image} alt={data.title} />
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
                {/* chart js */}
                {/* {Object.entries(data.taste).map(([tasteProperty, value]) => (
                    <TasteChart className="Chart" key={tasteProperty} name={tasteProperty} value={value} />
                ))} */}
            </div>
        </div>
    )
}