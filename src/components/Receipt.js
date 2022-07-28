import React, { useState } from 'react';
import ShowReceipt from './ShowReceipt';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Receipt = () => {

    const [receipt, setReceipt] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuidv4()
        const detailsReceipt = {
            id: id,
            date: e.target.date.value,
            amount: e.target.amount.value,
            payment: e.target.payment.value,
            remark: e.target.remark.value
        }
        console.log(detailsReceipt);
        setReceipt([detailsReceipt, ...receipt])
        toast.success('Added Successfully')
        e.target.reset()
    }

    return (
        <>
            <div className="container text-white w-50 mt-5 p-4 mb-4" style={{ backgroundColor: '#008B8B' }}>
                <div className=''>
                    <h3 className='pb-4'>Receipt Details</h3>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className='mb-3'>
                            <label for="date">Date<span className='text-danger'>*</span></label>
                            <input type="date" required className='px-5 py-1 border rounded ' name="date" id="date" />
                        </div>
                        <div className='mb-3'>
                            <label for="amount">Amount<span className='text-danger'>*</span></label>
                            <input type="number" required className='px-5 py-1 border rounded ' placeholder='Enter Amount (in INR)' name="amount" id="amount" />
                        </div>
                        <div className='mb-3'>
                            <label for="payment">Payment Mode<span className='text-danger'>*</span></label>
                            <select
                                name='payment'
                                required
                                className='px-5 py-1 rounded'
                            >
                                <option selected>Cash</option>
                                <option>Amazon Pay</option>
                                <option>PayPal</option>
                                <option>Skrill</option>
                                <option>Stripe</option>
                                <option>2Checkout</option>
                                <option>Payza</option>
                            </select>

                        </div>
                        <div className='mb-4' >
                            <label for="remark">Remark</label>
                            <input type="text" className='px-5 py-1 border rounded' placeholder='Enter Remark' name="remark" id="remark" />
                        </div>
                        <div>
                            <input className='btn btn-outline-dark px-5 m-2 text-white' type="reset" value="CANCEL" />
                            <input className='btn btn-outline-dark px-5 text-white' type="submit" value="SUBMIT" />
                        </div>

                    </form>
                </div>
            </div>
            <div className='container' >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Remark</th>
                            <th scope="col">*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            receipt?.map((r, index) => {
                                return (

                                    <ShowReceipt index={index} setReceipt={setReceipt} receipt={receipt} r={r} />
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    !receipt?.length && <p className='text-center display-5'>NO DATA FOUND</p>
                }
            </div>
        </>
    );
};

export default Receipt;