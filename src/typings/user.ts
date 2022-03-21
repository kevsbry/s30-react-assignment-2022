export interface User {
  name?: {
    title: string;
    first: string;
    last: string;
  };
  email?: string;
  picture?: {
    large: string;
    medium: string;
    small: string;
  };
}
