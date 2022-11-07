import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import Text from './Typography/Text';

interface Props extends HTMLAttributes<HTMLElement> {
	color?: keyof typeof ALERT_COLORS;
}

const ALERT_COLORS = {
	primary: 'bg-blue-100 text-blue-900',
	secondary: 'bg-slate-100 text-slate-900',
	success: 'bg-emerald-100 text-emerald-900',
	danger: 'bg-red-100 text-red-900',
	warning: 'bg-yellow-200 text-yellow-900',
	info: 'bg-purple-100 text-purple-900',
};

export default function Alert({ color = 'primary', children, className, ...props }: Props) {
	const colorStyles = ALERT_COLORS[color] || ALERT_COLORS['primary'];

	return (
		<div
			className={clsx(
				{ 'px-8 md:px-6': className?.indexOf('px') === -1 && className?.indexOf('p-') === -1 },
				{ 'py-4': className?.indexOf('py') === -1 && className?.indexOf('p-') === -1 },
				colorStyles,
				'text-sm rounded-sm',
				className,
			)}
			{...props}
		>
			<Text>{children}</Text>
		</div>
	);
}
