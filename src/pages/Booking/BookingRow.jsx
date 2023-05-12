import React from 'react';

const BookingRow = ({ booking }) => {
    console.log(booking);
    const { customerName,service,price,img,date,email } = booking;
    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                        <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            <img src={img} />
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
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default BookingRow;