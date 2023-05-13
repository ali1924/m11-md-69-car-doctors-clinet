import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const BookingRow = ({ booking, handleDeleteBooking }) => {
    console.log(booking);
    const { _id, service, price, img, date } = booking;
    // delete
    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDeleteBooking(_id)}>
                        <FontAwesomeIcon className='w-6 h-6 bg-black p-2 text-white rounded rounded-full' icon={faXmark} />
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            {
                                img && <img src={img} />
                            }
                        </div>
                    </div>
                </td>
                <td>
                    {service}
                </td>
                <td>
                    {date}
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                </th>
            </tr>
        </>
    );
};

export default BookingRow;