import React, { Component } from "react";
import PropTypes from "prop-types";

class CarTemplate extends Component {
  render() {
    return (
      <section
        className={`car  ${this.props.className && this.props.className}`}
        key={this.props.car.title}
      >
        <h2 className="car-title">{this.props.car.title}</h2>
        <h4 className="car-make">{this.props.car.make}</h4>
        <div className="car-gallery">
          {this.props.car.gallery.map(image => (
            <div className="car-image" key={image.imageAlt}>
              <div className="car-imageImageContainer">
                <img
                  className="car-imageImage"
                  src={image.image ? image.image : null}
                  alt={image.image ? image.altImage : "Default placeholder"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

CarTemplate.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string,
    make: PropTypes.string,
    gallery: PropTypes.array,
  }),
};

export default CarTemplate;
