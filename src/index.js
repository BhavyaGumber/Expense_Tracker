import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";

import  "./index.css"
import {Provider} from "./context/context";
import {SpeechProvider} from "@speechly/react-client"
ReactDOM.render
(
    <SpeechProvider appId="2e578817-ba70-4f9b-8335-f887b34d56c3" language="en-US">
    <Provider>
<App/>
</Provider>
</SpeechProvider>
, document.getElementById("root"));