import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button"

const Header = () => {
    const {user, onClose} = useTelegram();


    return(
        <div className={"header"}>
            <Button onClick={onClose}>Закрити</Button>
            <span className={'username'}></span>
                {user?.username}
        </div>
    )
}