import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface InfoCardProps {
	title: string;
	children: ReactNode;
	titleClassName?: string;
	className?: string;
}

export function InfoCard({ title, children, titleClassName, className }: InfoCardProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className={titleClassName}>{title}</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
