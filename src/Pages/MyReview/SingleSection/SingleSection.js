import React from 'react';

const SingleSection = ({ view, image }) => {
    const { message, name, service, serviceName, email } = view;

    return (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{serviceName}</div>
                  </div>
                </div>
              </td>
              <td>{serviceName}</td>
              <td>{message}</td>
            </tr>
    );
};

export default SingleSection;