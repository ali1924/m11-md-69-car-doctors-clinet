import React from 'react';
import { useLoaderData } from 'react-router-dom';
const BookService = () => {
    const service = useLoaderData();
    const { _id, price, title } = service;
    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const order = {
            name: name,
            price,
            email,
            date,
            message,
        }
        console.log(order);
    }
    return (
        <div className='bg-base-200 lg:p-24 p-3'>
            <h1 className='text-center text-3xl font-bold'>Book Service :{service.title}</h1>
            <form onSubmit={handleBookService} className=''>
                <div className='lg:flex lg:gap-3'>
                    <div className="form-control lg:w-1/2 my-3">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Service name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control lg:w-1/2 my-3">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input
                            type="text"
                            name='price'
                            defaultValue={`$ `+`${price}`}
                            placeholder="Service price"
                            className="input input-bordered"
                            required
                        />
                    </div>
                </div>
                <div className='lg:flex lg:gap-3'>
                    <div className="form-control lg:w-1/2 my-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control lg:w-1/2 my-3">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name='date'
                            placeholder=""
                            className="input input-bordered"
                            required
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
                        className='lg:p-5 p-3 my-3 rounded-lg textarea textarea-bordered h-[180px]'
                    ></textarea>
                </div>
                <div className="form-control  my-3">
                    <input
                        type="submit"
                        value="Submit"
                        className='btn btn-block bg-orange-600 hover:bg-orange-300'
                    />
                </div>

            </form>
        </div>
    );
}
export default BookService;