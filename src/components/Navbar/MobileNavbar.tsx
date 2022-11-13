import LinkButton from '../ui/Buttons/LinkButton';
import Text from '../ui/Typography/Text';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import IconButton from '../ui/Buttons/IconButton';

export default function MobileNavbar() {
	return (
		<header className="px-4 lg:px-12 py-5 sticky top-0 border-b bg-white xl:hidden flex items-center justify-between z-10">
			<div>
				<IconButton icon={HiOutlineMenuAlt2} size={20} />
			</div>

			<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
				<Text
					as="span"
					size="xl"
					transform="uppercase"
					className="lg:text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 pr-1"
				>
					Leadchain
				</Text>
			</LinkButton>

			<div>avatar</div>
		</header>
	);
}
