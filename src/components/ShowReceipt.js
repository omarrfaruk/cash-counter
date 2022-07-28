import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ShowReceipt = ({ r, index, setReceipt, receipt }) => {

    const handleDelete = (id) => {
        const filterReceipt = receipt?.filter((re) => re.id !== id)
        toast('Deleted Successfully')
        setReceipt(filterReceipt)

    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{r.date}</td>
            <td>&#8377;{r.amount}</td>
            <td>{r.payment}</td>
            <td>{r.remark.substring(0, 12)}...</td>
            <td><button className='btn text-danger' onClick={() => handleDelete(r.id)}><FaTrash /></button></td>
        </tr>
    );
};

export default ShowReceipt;