import { HashMap } from '@/shared/types/Hashmap';
import Button from './ui/Buttons/Button';
import Text from './ui/Typography/Text';

interface Props {
	tableHeaders: string[];
	data: HashMap<string>[] | any[];
	attributes: string[];
}

export default function CollectionTable({ tableHeaders, data, attributes }: Props) {
	return (
		<div className="overflow-x-auto relative">
			<table className="lg:table-fixed w-full text-left">
				<thead>
					<tr>
						{tableHeaders.map((tableHeader) => (
							<th
								key={tableHeader}
								className="text-xs text-slate-400 py-4 font-semibold first:text-left last:text-left text-center last:w-[94px]"
							>
								{tableHeader}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{attributes.map((attribute) => (
								<td key={attribute} className="py-4 text-sm text-center">
									{attribute === 'assets' ? (
										<div className="flex items-center gap-2">
											<img src={item[attribute].image} className="h-5" alt="" />
											<Text size="sm">{item[attribute].text}</Text>
										</div>
									) : attribute === 'action' ? (
										<div className="flex justify-end">
										<Button color="secondary" variant='outlined'>Delegate</Button>
										</div>
									) : (
										item[attribute]
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
