import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

type Props = {
	icon: IconType;
	color?: keyof typeof COLORS;
} & ComponentPropsWithoutRef<'button'> &
	IconBaseProps;

const COLORS = {
	primary: {
		base: 'text-slate-700',
	},
};

export default function IconButton({
	icon: Icon,
	color = 'primary',
	size,
	title,
	className,
	...props
}: Props) {
	const colorStyles = COLORS[color].base ?? COLORS.primary.base;

	return (
		<button className={clsx(colorStyles, 'flex items-center', className)} {...props}>
			{<Icon size={size} title={title} aria-label={title} />}
		</button>
	);
}
