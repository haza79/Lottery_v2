export function validateUsername(username: string): { isValid: boolean; errorMessage?: string } {
    // Define your username validation rules using a regular expression
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    // Test if the username matches the regex
    const isValid = usernameRegex.test(username);

    if (!isValid) {
        return {
        isValid: false,
        errorMessage: 'Username must be between 3 and 20 characters and only contain letters, numbers, and underscores.',
        };
    }

    // If the username passes all validation rules
    return {
        isValid: true,
    };
}

export function validatePassword(password: string): { isValid: boolean; errorMessage?: string } {
    // Define your password validation rules
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    // Check if the password meets the criteria
    const isValid =
      password.length >= minLength &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password);
  
    if (!isValid) {
      return {
        isValid: false,
        errorMessage: `Password must be at least ${minLength} characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.`,
      };
    }
  
    // If the password passes all validation rules
    return {
      isValid: true,
    };
}

export function validateCustomerName(name: string): { isValid: boolean; errorMessage?: string } {
    // Define your customer name validation rules
    const minLength = 2;
    const maxLength = 50;
    const allowedCharactersRegex = /^[A-Za-z\s\-]+$/;
  
    // Check if the name meets the criteria
    const isValid =
      name.length >= minLength &&
      name.length <= maxLength &&
      allowedCharactersRegex.test(name);
  
    if (!isValid) {
      return {
        isValid: false,
        errorMessage: `Customer name must be between ${minLength} and ${maxLength} characters long and contain only letters, spaces, and hyphens.`,
      };
    }
  
    // If the name passes all validation rules
    return {
      isValid: true,
    };


}

export function validateThaiPhoneNumber(phoneNumber: string): { isValid: boolean; errorMessage?: string } {
    // Define the regular expression pattern for a Thai phone number
    const thaiPhoneNumberRegex = /^0[0-9]{8,9}$/;
  
    // Check if the phone number matches the pattern
    const isValid = thaiPhoneNumberRegex.test(phoneNumber);
  
    if (!isValid) {
      return {
        isValid: false,
        errorMessage: 'Invalid Thai phone number. Please use the correct format starting with 0 and followed by 8 or 9 digits.',
      };
    }
  
    // If the phone number passes the validation
    return {
      isValid: true,
    };
}

export function validateDateOfBirth(dateOfBirth: string): { isValid: boolean; errorMessage?: string } {
    // Define the regular expression pattern for 'YYYY-MM-DD' format
    const dateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    // Check if the date of birth matches the pattern
    const isValid = dateOfBirthRegex.test(dateOfBirth);
  
    if (!isValid) {
      return {
        isValid: false,
        errorMessage: 'Invalid date of birth. Please use the format YYYY-MM-DD.',
      };
    }
  
    // Parse the date to check if it's a valid date
    const parsedDate = new Date(dateOfBirth);
    if (isNaN(parsedDate.getTime())) {
      return {
        isValid: false,
        errorMessage: 'Invalid date. Please provide a valid date.',
      };
    }
  
    // If the date of birth passes the validation
    return {
      isValid: true,
    };
}

export function validateBankNumber(bankNumber: string): { isValid: boolean; errorMessage?: string } {
    // Define a regular expression pattern for a generic bank account number
    const bankNumberPattern = /^[0-9]{1,20}$/; // Modify this pattern based on the expected format
  
    // Check if the provided bank number matches the pattern
    const isValid = bankNumberPattern.test(bankNumber);
  
    if (!isValid) {
      return {
        isValid: false,
        errorMessage: 'Invalid bank number. Please provide a valid bank number.',
      };
    }
  
    // If the bank number passes the validation
    return {
      isValid: true,
    };
}