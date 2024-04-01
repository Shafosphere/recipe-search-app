import { useEffect } from "react"
import { CiBookmarkPlus } from "react-icons/ci";
import "./styles-results.css"
export default function Results({ data }) {

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <div className="container-results">
            <div className="cards">
                {data.results.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-top">
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className="card-content">
                            <p>{item.title}</p>
                            <CiBookmarkPlus />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};