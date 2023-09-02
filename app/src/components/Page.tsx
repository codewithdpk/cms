import { ReactNode } from "react";
import DashboardLayout from "./layouts/DashboardLayout";

type PageProps = {
  children: ReactNode;
  title: string;
};

export default function Page({ children, title }: PageProps) {
  return <DashboardLayout pageTitle={title}>{children}</DashboardLayout>;
}
