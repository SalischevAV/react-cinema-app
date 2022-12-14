/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { IMAGE_URL } from '../../../../services/movies.service';
import { OverviewProps } from './Overview.props';

import './Overview.scss';

// TODO delete any
const Overview = ({ details, credits, ...props }: OverviewProps) => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const detailItems = [
      {
        id: 0,
        name: 'Tagline',
        value: `${details.tagline}`
      },
      {
        id: 1,
        name: 'Budget',
        value: `${numberFormatter(details.budget, 1)}`
      },
      {
        id: 2,
        name: 'Revenue',
        value: `${numberFormatter(details.revenue, 1)}`
      },
      {
        id: 3,
        name: 'Status',
        value: `${details.status}`
      },
      {
        id: 4,
        name: 'Release Date',
        value: `${details.release_date}`
      },
      {
        id: 5,
        name: 'Run Time',
        value: `${details.runtime} min`
      }
    ];
    setItems(detailItems);

    // eslint-disable-next-line
  }, []);

  const numberFormatter = (number: number, digits: number) => {
    const symbolArray = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' }
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = '';

    for (let i = 0; i < symbolArray.length; i++) {
      if (number >= symbolArray[i].value) {
        result =
          (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') +
          symbolArray[i].symbol;
      }
    }
    return result;
  };

  return (
    <>
      {details && credits && (
        <div className="overview" {...props}>
          <div className="overview-column-1">
            <div className="description">{details.overview}</div>

            <div className="cast">
              <div className="div-title">Cast</div>
              <table>
                {credits.cast.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td>
                        {item.profile_path ? (
                          <img src={`${IMAGE_URL}${item.profile_path}`} />
                        ) : (
                          <img src="https://via.placeholder.com/54x81?text=avatar" />
                        )}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.character}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className="overview-column-2">
            <div className="overview-detail">
              <h6>Production Companies</h6>
              {details.production_companies.map((company) => (
                <div className="product-company" key={company.id}>
                  {company.logo_path ? (
                    <img src={`${IMAGE_URL}${company.logo_path}`} alt="" />
                  ) : (
                    <img src="https://via.placeholder.com/30?text=company" />
                  )}
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
            <div className="overview-detail">
              <h6>Language(s)</h6>
              <p>
                {details.spoken_languages.map((language) => (
                  <a href="!#" key={language.english_name}>
                    {language.name}
                  </a>
                ))}
              </p>
            </div>
            {items.map((data: any) => (
              <div className="overview-detail" key={data.id}>
                <h6>{data.name}</h6>
                <p>
                  <a href="!#">{data.value}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
