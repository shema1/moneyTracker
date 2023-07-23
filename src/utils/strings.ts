// Create a function "get initials" that takes first and last name and returns initials if they are not empty and alphabet letters.
// It should not return emojis or other symbols.
// Example: getInitials('John', 'Doe') => 'JD'
export const getInitials = (firstName: string, lastName: string) => {
  // Check if first name is not empty and is alphabet letter
  const isFirstNameValid = firstName && firstName.match(/^[a-zA-Z0-9 ]+$/);
  console.log(firstName, isFirstNameValid);
  // Check if last name is not empty and is alphabet letter
  const isLastNameValid = lastName && lastName.match(/^[a-zA-Z0-9 ]+$/);
  // If both are valid, return initials
  if (isFirstNameValid && isLastNameValid) {
    return firstName[0] + lastName[0];
  }
  // If only first name is valid, return first letter of first name
  if (isFirstNameValid) {
    return firstName[0];
  }
  // If only last name is valid, return first letter of last name
  if (isLastNameValid) {
    return lastName[0];
  }
  // If both are invalid, return empty string
  return '';
};

// Get first letter of a string that may contain an emoji.
export const getFirstLetter = (str: string) => {
  if (!str || str === '') {
    return '';
  }
  // Remove all spaces from the string.
  str = str.replace(/\s/g, '');
  // Check if the string starts with an emoji.
  if (/^\p{Emoji}/u.test(str)) {
    // If so, return the second character in the string.
    return str.charAt(2);
  }
  // If the first character is a space, find the next valid character.
  if (str.charAt(0) === ' ') {
    for (let i = 1; i < str.length; i++) {
      const char = str.charAt(i);
      // Check if the character is a valid letter or number.
      if (/[a-zA-Z0-9]/.test(char)) {
        return char;
      }
    }
    // If no valid character is found, return an empty string.
    return '';
  }
  // Otherwise, return the first character in the string.
  return str.charAt(0);
};

// Get initials from a string that may contain an emoji.
export const getCleanName = (name: string) => {
  if (!name || name === '') {
    return '';
  }
  // Remove the first character from the string if it is a space.
  name.replace(/\p{Emoji}/gu, '');
  if (name.charAt(0) === ' ') {
    name = name.substring(1);
  }
  return name;
};

export const getGenitive = (name: string) => {
  if (!name || name === '') {
    return '';
  }
  if (name.charAt(name.length - 1) === 's') {
    return name + "'";
  } // James'
  return name + "'s"; // Carlo's
};

export const cropText = (text: string, maxLength: number) => {
  if (!text || text === '') {
    return '';
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
