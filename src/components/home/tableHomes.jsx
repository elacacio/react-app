import React from 'react';
import {ButtonDownload} from "../button/button";
import {Row} from "./item";
import {THeader} from "./tableHomesHeader";

export const HomeTable = (props) => {
    const  {
        list,
        downloadClick,
        sorterByClick
    } = props;

    const listHomes = list.map((data) => {
        return (
            <Row key={data.id}
                {...data}
            />
        );
    }, this);

    const header = ['Id', 'Title', 'Link', 'City', 'Picture'];
    return (
        <section className={'col-md-12'}>
            <div className="row">
                <table className='table'>
                    <THeader
                        list={header}
                        sorterByClick={sorterByClick}
                    />
                    <tbody>
                        {listHomes}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan={4}>
                            <ButtonDownload
                                onClick={downloadClick}
                                text={'Download'}
                            />
                        </th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}