import NewsCard from '@/components/NewsCard';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Typography/Heading';
import Text from '@/components/ui/Typography/Text';

export default function News() {
	return (
		<Container>
			<main className="bg-white p-6 md:p-10">
				<section>
					<Heading size="xl">Latest news</Heading>

					<div className="border-b border-slate-100 my-6" />

					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</div>
				</section>

				<section className="mt-12">
					<Heading size="xl">Featured news</Heading>

					<div className="border-b border-slate-100 my-6" />

					<div className="flex overflow-x-auto">
						{Array.from({ length: 10 }, (_, index) => (
							<div key={index} className="flex gap-4 min-w-[528px]">
								<img
									src="https://v2.cimg.co/news/93668/233948/responsive-images/adobestock-andriy-blokhin-1-1-media-library-original-1200-800-media-library-original-1200-800___media_library_original_1200_800.jpg"
									className="w-48 h-24 object-cover rounded-sm"
									alt=""
								/>

								<div className="max-w-xs flex flex-col">
									<Text size="xl" weight="semibold" className="flex-1 leading-6">
										Google to help people find vaccination centres
									</Text>
									<Text size="sm" className="text-slate-400">
										Google had rolled out knowledge panels in Google Search that up for queries
									</Text>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</Container>
	);
}
