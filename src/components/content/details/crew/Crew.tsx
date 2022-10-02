/* eslint-disable multiline-ternary */
import React from 'react';
import { CrewProps } from './Crew.props';
import { IMAGE_URL } from '../../../../services/movies.service';

import './Crew.scss';

const Crew = ({ credits, ...props }: CrewProps) => {
  return (
    <>
      <div className="cast" {...props}>
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {credits.crew.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  {item.profile_path ? (
                    <img src={`${IMAGE_URL}${item.profile_path}`} alt="" />
                  ) : (
                    <img src="https://via.placeholder.com/54x81?text=avatar" />
                  )}
                </td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.job}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Crew;
