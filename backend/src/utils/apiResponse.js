// src/utils/apiResponse.js

class ApiResponse {
  constructor(success, message, data = null) {
    this.success = success;
    this.message = message;
    if (data !== null) {
      this.data = data;
    }
  }
}

const successResponse = (message, data = null) => {
  return new ApiResponse(true, message, data);
};

const errorResponse = (message, data = null) => {
  return new ApiResponse(false, message, data);
};

module.exports = {
  ApiResponse,
  successResponse,
  errorResponse,
};
