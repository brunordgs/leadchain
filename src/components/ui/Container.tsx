import clsx from 'clsx';

export default function Container({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
	return <main className={clsx('p-6', className)}>{children}</main>;
}
