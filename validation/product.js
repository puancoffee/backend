const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name: "";
    data.description = !isEmpty(data.description) ? data.description: "";
    data.category = !isEmpty(data.category) ? data.category: "";
    data.date = !isEmpty(data.date) ? data.date: "";
    data.time = !isEmpty(data.time) ? data.time: "";
    data.price = !isEmpty(data.price) ? data.price: "";

    // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Description checks
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
  // Category checks
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  // Date checks
  if (Validator.isEmpty(data.date)) {
    errors.date = "Date field is required";
  }
  // Time checks
  if (Validator.isEmpty(data.time)) {
    errors.time = "Time field is required";
  }
  // Price checks
  if (Validator.isEmpty(data.price)) {
    errors.price = "Name field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}