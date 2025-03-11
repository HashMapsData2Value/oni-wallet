import { Button } from "@/components/ui/button.tsx";
import { ListItem } from "@/components/ui/list-item.tsx";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";

export type AssetListItemProps = {
	index: string;
	name: string;
	amount: number;
	logo: string;
	onClick?: () => void;
};

export const AssetListItem = forwardRef<HTMLDivElement, AssetListItemProps>(
	({ index, name, amount, logo, ...props }) => {
		return (
			<ListItem
				id={index}
				title={name}
				description={`Amount: ${amount}`}
				adornmentLeft={<img src={logo} alt={`Logo for ${name}`} />}
				adornmentRight={
					<Button variant="ghost">
						<ChevronRight />
					</Button>
				}
				{...props}
			/>
		);
	},
);
