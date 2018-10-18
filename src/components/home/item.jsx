import React from 'react';

export const Row = (props) => {
    const {
        id,
        title,
        link,
        city,
        picture
    } = props

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{link}</td>
            <td>{city}</td>
            <td>
                <img src={picture} alt={title} className="img-thumbnail" />
            </td>
        </tr>
    )
}
