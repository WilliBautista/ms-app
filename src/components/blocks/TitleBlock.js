import React from 'react'
import PropTypes from "prop-types";

export const TitleBlock = ({title}) => {
  return (
    <div className="block-title">
      <div className="block-title__wrapper row">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
}
