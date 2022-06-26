
export interface User {
  // — unique identifier (string, uuid) generated on server side
  id: string;
  // — user's name (string, required)
  username: string;
  // — user's age (number, required)
  age: number;
  // — user's hobbies (array of strings or empty array, required)
  hobbies: string[];
}

export type UserId = User['id'];
