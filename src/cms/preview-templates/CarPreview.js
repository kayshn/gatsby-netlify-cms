import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

import CarTemplate from "../../templates/car";

const CarPreview = ({ entry }) => {
  const car = entry.getIn(["data"]).toJS();
  const rawDate = car.date;
  const formattedDate = format(rawDate, "MMMM Do YYYY @ h:mm A");
  return <CarTemplate car={{ ...car, formattedDate, rawDate }} />;
};

CarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default CarPreview;
