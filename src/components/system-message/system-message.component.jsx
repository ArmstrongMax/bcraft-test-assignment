import React from "react";
import {ServerMessageContainer} from "./system-message.styles";

const ServerMessage = ({message}) => {
    return <ServerMessageContainer>
        {message}
    </ServerMessageContainer>
}

export default ServerMessage