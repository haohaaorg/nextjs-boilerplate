export default interface AxiosClientDto {
	// http method
	method?: string
	// query params
	params?: string
	// data
	data?: any
	// Bearer token
	token?: string
	// http header
	header?: string
	// force logout on some situation like 403 error
	forceLogout?: () => void
	// trigger once the error was happened
	onError?: (error: any) => void
	// trigger once successful
	onSuccess?: (response: any) => void
	// specific response type for api
	responseType?: string
}
