export interface SortableProps {
  id: number;
  index: number;
  color: string;
  name: string;
}

export interface LinkProps {
  user?: string;
  platform: string;
  url: string;
  showList?: boolean;
}

export type UserProps = {
  _id?: string;
  image?: File | null;
  email: string;
  password: string;
};
