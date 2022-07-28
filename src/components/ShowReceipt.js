import React from 'react';

const ShowReceipt = ({ r, index }) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{r.date}</td>
            <td>&#8377;{r.amount}</td>
            <td>{r.payment}</td>
            <td>{r.remark.substring(0, 12)}...</td>
        </tr>
    );
};

export default ShowReceipt;