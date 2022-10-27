import { FONT_WEIGHTS } from '@/shared/constants';
import { Typography } from '@/shared/interfaces/Typography';
import clsx from 'clsx';

type Props = {
	as?: 'p' | 'span';
	size?: keyof typeof sizes;
} & React.HTMLAttributes<HTMLParagraphElement> &
	Typography;

const sizes = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	md: 'text-md',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
};

export default function Text({
	as: Tag = 'p',
	size = 'base',
	weight = 'normal',
	transform = 'normal-case',
	children,
	className,
	...props
}: Props) {
	return (
		<Tag className={clsx(sizes[size], transform, FONT_WEIGHTS[weight], className)} {...props}>
			{children}
		</Tag>
	);
}
