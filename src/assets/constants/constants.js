export const constants = {
  REQUIRED_FIELD: "Please enter your",
  INVALID_EMAIL: "Please enter a valid email address.",
  SERVER_ERROR: "ServerError",
  LOGIN_ERROR: "LoginError",
  requiredField(field) {
    return `${this.REQUIRED_FIELD} ${field}.`;
  },
};
