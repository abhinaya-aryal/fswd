let aboutMessage = "Issue Tracker API v1.0";

export function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

export function getMessage() {
  return aboutMessage;
}
