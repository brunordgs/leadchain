import Text from './ui/Typography/Text';

export default function Footer() {
	return (
		<footer className="border-t py-4 text-center text-slate-400">
			<Text size="xs" weight="normal">&copy; {new Date().getFullYear()} RuneChain. All rights reserved.</Text>
		</footer>
	);
}
