import { HashMap } from '@/shared/types/HashMap';
import Image from 'next/image';
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
								<td key={attribute} className="py-4 text-sm text-center whitespace-nowrap">
									{attribute === 'assets' ? (
										<div className="flex items-center gap-2">
											<Image src={item[attribute].image} width={30} height={30} alt="" />
											<Text size="sm">{item[attribute].text}</Text>
										</div>
									) : attribute === 'action' ? (
										<div className="flex justify-end">
											<Button color="secondary" variant="outlined">
												Delegate
											</Button>
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
		// <div className="overflow-x-auto relative">
		// 	<table className="w-full lg:table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
		// 		<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		// 			<tr>
		// 				{tableHeaders.map((tableHeader) => (
		// 					<th
		// 						key={tableHeader}
		// 						className="text-xs text-slate-400 py-4 font-semibold first:text-left last:text-left text-center last:w-[94px]"
		// 					>
		// 						{tableHeader}
		// 					</th>
		// 				))}
		// 			</tr>
		// 		</thead>
		// 		<tbody>
		// 			<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
		// 				<th
		// 					scope="row"
		// 					className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
		// 				>
		// 					Apple MacBook Pro 17"
		// 				</th>
		// 				<td className="py-4 px-6">Sliver</td>
		// 				<td className="py-4 px-6">Laptop</td>
		// 				<td className="py-4 px-6">$2999</td>
		// 			</tr>
		// 			<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
		// 				<th
		// 					scope="row"
		// 					className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
		// 				>
		// 					Microsoft Surface Pro
		// 				</th>
		// 				<td className="py-4 px-6">White</td>
		// 				<td className="py-4 px-6">Laptop PC</td>
		// 				<td className="py-4 px-6">$1999</td>
		// 			</tr>
		// 			<tr className="bg-white dark:bg-gray-800">
		// 				<th
		// 					scope="row"
		// 					className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
		// 				>
		// 					Magic Mouse 2
		// 				</th>
		// 				<td className="py-4 px-6">Black</td>
		// 				<td className="py-4 px-6">Accessories</td>
		// 				<td className="py-4 px-6">$99</td>
		// 			</tr>
		// 		</tbody>
		// 	</table>
		// </div>
	);
}
