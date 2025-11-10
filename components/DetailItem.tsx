import { Separator } from "@/components/ui/separator";

interface DetailItemProps {
	label: string;
	value: string;
	showSeparator?: boolean;
	valueClassName?: string;
}

export function DetailItem({
	label,
	value,
	showSeparator = true,
	valueClassName,
}: DetailItemProps) {
	return (
		<>
			<div>
				<p className="text-sm font-medium text-muted-foreground">{label}</p>
				<p className={valueClassName}>{value}</p>
			</div>
			{showSeparator && <Separator />}
		</>
	);
}

