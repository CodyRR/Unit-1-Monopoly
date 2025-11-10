import { ruleList } from "../data/ruleList.js";

const RulesPage = () => {

    return (
        <div>
            <p>THE RULES PAGE</p>
            <ul>
                {ruleList.map((rule, index) => (
                    <li key={"rule-" + index}>{rule}</li>
                ))}
            </ul>
        </div>
    )
}

export default RulesPage;