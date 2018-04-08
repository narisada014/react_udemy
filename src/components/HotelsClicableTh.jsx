import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsClicableTh = ({ label, sortKey, isSelected, onSort }) => (
  <th
    className='hotels-clicable-th'
    onClick={() => onSort(sortKey)}
  >{label}{isSelected ? '▲' : ''}
  </th>
);

HotelsClicableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClicableTh;
