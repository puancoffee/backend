const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateDetail(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.product = !isEmpty(data.product) ? data.product: "";
    data.name = !isEmpty(data.name) ? data.name: "";
    data.date = !isEmpty(data.date) ? data.date: "";
    data.time = !isEmpty(data.time) ? data.time: "";
    data.location = !isEmpty(data.location) ? data.location: "";

    // Event checks
  if (Validator.isEmpty(data.product)) {
        errors.product = "Product field is required";
      }
    // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Date checks
  if (Validator.isEmpty(data.date)) {
    errors.date = "Date field is required";
  }
  // Time checks
  if (Validator.isEmpty(data.time)) {
    errors.time = "Time field is required";
  }
  // Location checks
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}