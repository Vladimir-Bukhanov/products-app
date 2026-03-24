interface IErrorMessage {
	error: string
}


export default function ErrorMessage({error}: IErrorMessage) {
	return (
		<p className='text-center text-xl text-red-500 mt-10'>{error}</p>
	)
}
