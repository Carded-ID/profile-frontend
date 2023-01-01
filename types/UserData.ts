export type LinkData = {
  url: string;
  title: string;
};

export type UserData = {
  profilePicture: string;
  name: string;
  bio: string;
  links: LinkData[];
};
