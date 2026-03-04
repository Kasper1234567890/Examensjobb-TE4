import type { ReactNode } from "react";
import type { BreadcrumbItem } from "./navigation";

export type LayoutProps = {
	children: ReactNode;
	breadcrumbs?: BreadcrumbItem[];
};
