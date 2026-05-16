class ValidationError extends Error {
  constructor(message) {
    // call the constructor of parent class and pass on message recieved upon creation of this ValidationError class.
    super(message);

    // Custom property for this validationError
    this.code = 407; // custom code
    this.name = "Validation Error";
  }
}

class InvalidUserError extends Error {
  constructor(message) {
    super(message);

    this.code = 407;
    this.name = "InvalidUserError";
  }
}

class AuthenticationFailed extends Error {
  constructor(message) {
    super(message);

    this.code = 407;
    this.name = "AuthenticationFailed";
  }
}

class ConnectionError extends Error {
  constructor(message) {
    super(message);

    this.code = 407;
    this.name = "ConnectionError";
  }
}

module.exports = {
  ValidationError,
  InvalidUserError,
  AuthenticationFailed,
  ValidationError,
};
