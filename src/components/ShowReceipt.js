import React from 'react';

const ShowReceipt = ({ r }) => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{r.date}</td>
            <td>{r.amount}</td>
            <td>{r.payment}</td>
            <td>{r.remark}</td>
        </tr>
    );
};

export default ShowReceipt;