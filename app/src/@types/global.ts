export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  userId: string;
  content: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  expiredAt: string;
}

export interface SaveBlogPayload {
  title: string;
  subtitle: string;
  userId: string;
  content: string;
}

export type ColorVariants =
  | "primary"
  | "success"
  | "secondary"
  | "danger"
  | "warning";
