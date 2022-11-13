import NewsCard from '@/components/NewsCard';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Typography/Heading';

export default function News() {
	return (
		<Container>
			<section className="bg-white p-6 md:p-10">
				<Heading size="xl" className="mb-8">
					Latest news
				</Heading>

				<div className="flex gap-8">
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</section>
		</Container>
	);
}
