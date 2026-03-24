
export type FiltersType = "electronics" | "jewelery" | "men's clothing" |"women's clothing"

interface IFilters {
	currentFilter: FiltersType | null
	onFilter: (item: FiltersType) => void
}

export default function Filters({currentFilter, onFilter}: IFilters) {
	return (
		<div className='w-40 mb-5 grid sm:w-85 sm:grid-cols-2 gap-5'>
			{(["electronics", "jewelery", "men's clothing", "women's clothing"] as FiltersType[]).map(filterItem => (
				<button
					key={filterItem}
					className={`border cursor-pointer duration-200 hover:scale-102 ${currentFilter === filterItem ? "bg-gray-100" : ""}`}
					onClick={() => onFilter(filterItem)}
				>
					{filterItem}
				</button>
			))}
		</div>
	)
}
