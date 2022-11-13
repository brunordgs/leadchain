import Link from 'next/link';
import { HTMLAttributes } from 'react';
import Text from './ui/Typography/Text';

interface Props extends HTMLAttributes<HTMLElement> {
	prop?: number;
}

export default function NewsCard() {
	return (
		<Link
			href="/"
			className="rounded-sm overflow-hidden border border-slate-200 shadow-md hover:opacity-90 transition-opacity ease-out"
			passHref
		>
			<img
				src="https://v2.cimg.co/news/93668/233948/responsive-images/adobestock-andriy-blokhin-1-1-media-library-original-1200-800-media-library-original-1200-800___media_library_original_1200_800.jpg"
				className="w-full h-52 object-cover"
				alt=""
			/>
			<div className="pt-2 p-4 space-y-4">
				<Text size="2xl" weight="semibold" className="text-slate-700">
					SEC Charges Coin Club Founders for $295 Million Ponzi Scheme
				</Text>
				<Text size="sm" className="text-slate-400 line-clamp-3">
					The US Securities and Exchange Commission (SEC) has filed charges against the founder and
					three promoters of Trade Coin Club, arguing that they duped investors into sinking money
					in a fraudulent crypto trading bot.
				</Text>

				<div>
					<Text
						as="span"
						size="xs"
						weight="bold"
						transform="uppercase"
						className="text-indigo-500 border-r border-r-slate-200 pr-2 mr-2"
					>
						Blockchain news
					</Text>

					<Text as="span" size="xs" className="text-slate-400">
						2h ago
					</Text>
				</div>
			</div>
		</Link>
	);
}
