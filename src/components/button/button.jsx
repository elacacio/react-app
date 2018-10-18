import React from 'react';
import {downloadRoute} from "../routes";

export const ButtonDownload = (props) => {
    const {
        onClick,
        text
    } = props;

    return (
        <a href={downloadRoute} onClick={onClick}>{text}</a>
    );
}