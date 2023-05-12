import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const loadedData = useLoaderData();
    const handleOderConfirm = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log('name: ', firstName, ' ', lastName);
        console.log('phone: ', phone, 'email: ', email);
        console.log('message: ', message);
    }
    return (
        <div className='bg-base-200'>
            <form onSubmit={handleOderConfirm} className='lg:p-24 p-3'>
                <div className='lg:flex lg:gap-3'>
                    <div className="form-control lg:w-1/2 my-3">
                        <input
                            type="text"
                            name='firstName'
                            placeholder="First name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control lg:w-1/2 my-3">
                        <input
                            type="text"
                            name='lastName'
                            placeholder="Last name"
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <div className='lg:flex lg:gap-3'>
                    <div className="form-control lg:w-1/2 my-3">
                        <input
                            type="text"
                            name='phone'
                            placeholder="Your phone"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control lg:w-1/2 my-3">
                        <input
                            type="email"
                            name='email'
                            placeholder="Your email"
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <div className="form-control  my-3">
                    <textarea
                        name="message"
                        id="message"
                        placeholder='Your message'
                        cols="30"
                        rows="10"
                        className='lg:p-5 p-3 my-3 rounded-lg textarea textarea-bordered '
                    ></textarea>
                </div>
                <div className="form-control  my-3">
                    <input
                        type="submit"
                        value="Order Confirm"
                        className='btn btn-block bg-orange-600 hover:bg-orange-300'
                    />
                </div>

            </form>
        </div>
    );
}  
export default CheckOut;