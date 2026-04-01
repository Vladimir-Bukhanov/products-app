
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"
import type { SortField, SortState } from '../types/SortType'

type SortsProps = {
	sort: SortState,
	onSort: (field: SortField) => void
}

export default function Sorts({sort, onSort}: SortsProps) {

	return (
		<div
			className='block mb-3'
		>
			<button
			 className='border pl-2 w-28 cursor-pointer duration-200 hover:scale-102 mb-3 flex items-center'
			 onClick={() => onSort('title')}
			>
				sort by title {sort.field === 'title' && (sort.order === 'asc' ? <FaArrowUpLong className='ml-1' /> : <FaArrowDownLong className='ml-1' />)}
			</button>
			<button
			 className='border w-30 cursor-pointer duration-200 hover:scale-102 flex items-center pl-2'
			 onClick={() => onSort('price')}
			>
				sort by price {sort.field === 'price' && (sort.order === 'asc' ? <FaArrowUpLong className='ml-1' /> : <FaArrowDownLong className='ml-1' />)}
			</button>
		</div>
	)

	
}
