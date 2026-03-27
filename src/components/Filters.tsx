
export type FiltersType = "electronics" | "jewelery" | "men's clothing" |"women's clothing" | "all products"

interface IFilters {
	currentFilter: FiltersType
	onFilter: (item: FiltersType) => void
}

export default function Filters({currentFilter, onFilter}: IFilters) {
	return (
		<div>
			{(["all products", "electronics", "jewelery", "men's clothing", "women's clothing"] as FiltersType[]).map(filterItem => (
				<button
					key={filterItem}
					className={`border px-2 mr-3 mb-3 cursor-pointer duration-200 hover:scale-102 ${currentFilter === filterItem ? "bg-gray-100" : ""}`}
					onClick={() => onFilter(filterItem)}
				>
					{filterItem}
				</button>
			))}
		</div>
	)
}
