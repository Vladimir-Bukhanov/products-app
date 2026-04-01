export type SortField = 'title' | 'price' | null

export type SortOrder = 'asc' | 'desc'

export type SortState = {
	field: SortField
	order: SortOrder
}
