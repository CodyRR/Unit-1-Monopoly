import { aboutList } from "../data/aboutList.js";

const AboutPage = () => {

    return (
        <main>
            <p>THE ABOUT PAGE</p>
            <ul>
                {aboutList.map((aboutLine, index) => (
                    <li key={"line-" + index}>{aboutLine}</li>
                ))}
            </ul>
        </main>
    )
}

export default AboutPage;