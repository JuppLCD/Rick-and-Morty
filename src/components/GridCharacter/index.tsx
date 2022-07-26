interface Props {
	children: JSX.Element | JSX.Element[];
}
function GridCharacter({ children }: Props) {
	return <section className='grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-9'>{children}</section>;
}

export default GridCharacter;
