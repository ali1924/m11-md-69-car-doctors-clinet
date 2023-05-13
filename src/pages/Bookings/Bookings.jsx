import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import BookingRow from '../Booking/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])
    // console.log(bookings);

    //delete single booking
    const handleDeleteBooking = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }
    // update
    const handleConfirmBooking = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    // update status
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm';
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings);

                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center py-3 font-bold'>Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full rounded-lg">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl'>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDeleteBooking={handleDeleteBooking}
                                handleConfirmBooking={handleConfirmBooking}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;