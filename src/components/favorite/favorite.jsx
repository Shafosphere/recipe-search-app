import "./favorite.css"
import { FaRegGrinAlt, FaRegGrinHearts, FaRegGrinStars, FaRegLaughBeam, FaRegSurprise } from "react-icons/fa";
import { FaRegFaceDizzy, } from "react-icons/fa6";

export default function Favorite({ favList, onCardClick }) {
    function contain() {

        const availableEmoticons = [
            <FaRegGrinAlt />,
            <FaRegGrinHearts />,
            <FaRegGrinStars />,
            <FaRegLaughBeam />,
            <FaRegSurprise />,
            <FaRegFaceDizzy />
        ];

        function emoticons() {
            const selectedEmoticons = [];
            while (selectedEmoticons.length < 4) {
                const randomIndex = Math.floor(Math.random() * availableEmoticons.length);
                const randomEmoticon = availableEmoticons[randomIndex];
                if (!selectedEmoticons.includes(randomEmoticon)) {
                    selectedEmoticons.push(randomEmoticon);
                }
            }
            return selectedEmoticons;
        }

        return (
            <div className="contain">
                {favList.map((item) => (
                    <div className="items-contain" key={item.id}>
                        <div className="left-contain">
                            <img src={item.image} alt={item.title} />
                            <span className="title-contain">{item.title}</span>
                            <span onClick={() => onCardClick(item.id)} className="inscription-contain">HOW TO MAKE</span>
                        </div>
                        <div className="rigth-contain">
                            <div className="right-top-contain">
                                {emoticons()}
                            </div>
                            <div className="right-bot-contain">
                                <div className="summary">
                                    <div dangerouslySetInnerHTML={{ __html: item.summary }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    function doNotContain() {
        return (
            <div className="not-contain">Add a recipe, and the world becomes tastier. <FaRegGrinAlt /> </div>
        )
    }
    return (
        <>
            {(favList.length > 0)
                ? contain()
                : doNotContain()
            }
        </>
    )
}