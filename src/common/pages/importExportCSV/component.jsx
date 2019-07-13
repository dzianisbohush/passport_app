/* eslint-disable */
import React from 'react';
import csv from 'csvtojson';
import { StyledMainWrapper } from './styles';
import { readDataFromFile } from './utils';

const Start = () => (
  <StyledMainWrapper>
    <div className="header__json-operations">
      <label className="header__json-operation" htmlFor="json-input">
        Upload JSON
      </label>
      <input
        id="json-input"
        type="file"
        accept=".csv"
        style={{ display: 'none' }}
        onChange={event => {
          readDataFromFile(event, async data => {
            const jsonArray = await csv().fromString(data);
            console.log(jsonArray);
          });
        }}
      />
    </div>
  </StyledMainWrapper>
);

export default Start;
// eslint-enable
