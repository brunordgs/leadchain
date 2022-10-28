import { HashMap } from '@/shared/types/Hashmap';

interface Props {
	tableHeaders: string[];
	data: HashMap<string>[];
	attributes: string[];
}

export default function Table({ tableHeaders, data, attributes }: Props) {
	return (
		<div className="overflow-x-auto relative">
			<table className="lg:table-fixed w-full text-left">
				<thead>
					<tr>
						{tableHeaders.map((tableHeader) => (
							<th
								key={tableHeader}
								className="text-xs text-slate-400 py-4"
							>
								{tableHeader}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={String(item)}>
							{attributes.map((attribute) => (
								<td key={attribute} className="py-4">
									{item[attribute]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
