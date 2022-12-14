import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import type { IconType } from 'react-icons';

export interface Props {
	color?: keyof typeof BUTTON_COLORS;
	variant?: 'base' | 'outlined';
	size?: 'small' | 'default' | 'large' | 'custom';
	fontSize?: 'xs' | 'sm' | 'base' | 'lg';
	leftIcon?: IconType | string;
	rightIcon?: IconType | string;
}

type ButtonProps = Props & ComponentPropsWithoutRef<'button'>;

export const BUTTON_COLORS = {
	primary: {
		base: 'bg-gradient-to-r from-purple-500 to-blue-500 text-slate-100 hover:text-white border border-indigo-500 rounded-sm shadow-md',
		outlined: 'text-purple-500 hover:text-purple-700 border border-purple-500 rounded-sm shadow-sm',
		disabled: {
			base: 'bg-zinc-400/40 text-zinc-400 border border-transparent cursor-not-allowed rounded-md shadow-md',
			outlined: '',
		},
	},
	secondary: {
		base: 'text-slate-400 hover:text-slate-600 border border-slate-200 !text-xs rounded-sm shadow-sm',
		outlined: 'text-slate-700 hover:text-black border border-slate-200 rounded-sm shadow-sm',
		disabled: {
			base: 'bg-zinc-400/40 text-zinc-400 border border-transparent cursor-not-allowed rounded-md shadow-md',
			outlined: '',
		},
	},
	success: {
		base: 'bg-teal-600 text-zinc-100 hover:text-white border border-teal-600 rounded-md shadow-md',
		outlined: '',
		disabled: {
			base: '',
			outlined: '',
		},
	},
	link: {
		base: 'text-sky-700 hover:text-sky-800',
		outlined: '',
		disabled: {
			base: '',
			outlined: '',
		},
	},
	unstyled: {
		base: '',
		outlined: '',
		disabled: {
			base: '',
			outlined: '',
		},
	},
};

export const BUTTON_FONT_SIZES = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
};

export default function Button({
	color = 'primary',
	variant = 'base',
	size = 'default',
	leftIcon: LeftIcon,
	rightIcon: RightIcon,
	fontSize = 'sm',
	className,
	children,
	...props
}: ButtonProps) {
	const colorStyles = BUTTON_COLORS[color] ?? BUTTON_COLORS.primary;

	return (
		<button
			type={props.type ?? 'button'}
			className={clsx(
				props.disabled
					? colorStyles.disabled[variant]
					: variant === 'outlined'
					? colorStyles.outlined
					: colorStyles.base,
				BUTTON_FONT_SIZES[fontSize],
				{
					'px-6 py-4': size === 'large',
					'px-4 py-2': size === 'default' && !['unstyled', 'link'].includes(color),
					'px-2 py-1': size === 'small',
					'': size === 'custom',
				},
				`flex items-center justify-center transition-all ease-out leading-5 font-semibold focus:outline-none`,
				className,
			)}
			aria-label={props.title}
			{...props}
		>
			{LeftIcon && <LeftIcon className="mr-2" />}
			{children}
			{RightIcon && <RightIcon className="ml-2" />}
		</button>
	);
}
