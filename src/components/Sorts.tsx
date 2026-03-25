

export type SortsType = 'price' | 'title'

interface ISorts {
	currentSort: SortsType
	onSort: (item: SortsType) => void
}


export default function Sorts({currentSort, onSort}: ISorts) {
	return (
		<div className='flex mb-5'>
			{(['title', 'price'] as SortsType[]).map(sortItem => (
				<button
					key={sortItem}
					className={`border px-2 mr-3 cursor-pointer duration-200 hover:scale-102 ${currentSort === sortItem ? "bg-blue-100" : ""}`}
					onClick={() => onSort(sortItem)}
				>
					sorted by {sortItem}
				</button>
			))}
		</div>
	)
}
