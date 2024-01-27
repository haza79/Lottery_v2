class UserNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'UserNotFoundError';
    }
  }
  
  class IncorrectPasswordError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'IncorrectPasswordError';
    }
  }
  
  class UserRoleNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'UserRoleNotFoundError';
    }
  }
  
  class RoleNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'RoleNotFoundError';
    }
  }

  export {UserNotFoundError,IncorrectPasswordError,UserRoleNotFoundError,RoleNotFoundError}