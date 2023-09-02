import { ReactNode } from "react";
import DashboardLayout from "./layouts/DashboardLayout";

type PageProps = {
  children: ReactNode;
  title: string;
};

export default function Page({ children, title }: PageProps) {
  console.log("This is a page");
  return <DashboardLayout pageTitle={title}>{children}</DashboardLayout>;
}
