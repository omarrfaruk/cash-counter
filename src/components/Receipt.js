import React, { useState } from 'react';

const Receipt = () => {

    const [receipt, setReceipt] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        
    }

    return (
        <div>
            <div className="container">
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label for="date">Date<span className='text-danger'>*</span></label>
                        <input type='date' id="date" />
                    </div>
                    <div>
                        <label for="amount">Amount<span className='text-danger'>*</span></label>
                        <input type='number' id="amount" />
                    </div>
                    <div>
                        <label for="payment">Payment Mode<span className='text-danger'>*</span></label>
                        <select
                            name='payment'>
                            <option selected>PayPal</option>
                            <option>Amazon Pay</option>
                            <option>Skrill</option>
                            <option>Stripe</option>
                            <option>2Checkout</option>
                            <option>Payza</option>
                        </select>
                    </div>
                    <div>
                        <label for="remark">Remark</label>
                        <input type='text' id="remark" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Receipt;