export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string | null;
};

export type User = {
  email: string;
  id: number;
  password: string;
  fullName: string;
};
