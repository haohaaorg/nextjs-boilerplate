/**
 * Shape of the response from API
 * it will be varied from project to project and
 * we need to specify proper shape according to each structure
 */
export default interface APIResponseDto {
	data: any
	current_dt?: string
	error_code: number
	error_msg: string
}

export interface APIResolverDto {
	data: any
	error: string
	loading: boolean
}

/**
 *  request for listing page
 */
export interface APIRequestDto {
	CurrentPage?: number
	CountPerPage?: number
	Search?: string
	SortBy?: string
	IsDesc?: string
	Status?: string
}

export interface QueryStringDto {
	CurrentPage?: string | undefined
	CountPerPage?: string | undefined
	SortBy?: string | undefined
	IsDesc?: string | undefined
	Status?: string | undefined
	Search?: string | undefined
	RegionId?: string | undefined
}
