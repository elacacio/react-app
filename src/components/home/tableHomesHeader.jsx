import React from 'react';
import {apiRoute} from "../routes";

export const THeader = (props) => {
    const {
        sorterByClick,
        list
    } = props;

    const elements = list.map((data) => {
        return (
            <th key={data.toLocaleLowerCase()}>
                <a data-sorter={data.toLocaleLowerCase()} onClick={sorterByClick} href={apiRoute}>{data}</a>
            </th>
        );
    }, this);

    return (
        <thead>
        <tr>
            {elements}
        </tr>
        </thead>
    );
}