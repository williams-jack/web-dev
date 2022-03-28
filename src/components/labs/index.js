import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo";
import { Link } from "react-router-dom";
import ReduxExamples from "./redux-examples";
const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <ReduxExamples />
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <br />
            <hr />
            <span>
                <Link to="/tuiter">Tuiter</Link> |{" "}
                <Link to="/hello">Hello</Link>
            </span>
        </div>
    );
};

export default Labs;
