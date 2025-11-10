import { aboutList } from "../data/aboutList.js";

const AboutPage = () => {

    return (
        <div>
            <p>THE ABOUT PAGE</p>
            <ul>
                {aboutList.map((aboutLine, index) => (
                    <li key={"line-" + index}>{aboutLine}</li>
                ))}
            </ul>
        </div>
    )
}

export default AboutPage;