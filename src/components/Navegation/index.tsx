import { Link } from 'react-router-dom';

function Navegation() {
	const links = [
		{ url: '/', name: 'Home' },
		{ url: '/filter', name: 'Search' },
	];
	return (
		<header className='sticky top-0 z-[1]'>
			<nav className='shadow bg-gray-800'>
				<div className='container px-6 py-4 mx-auto'>
					<div className='md:flex md:items-center md:justify-between'>
						<div className='flex items-center justify-between'>
							<div className='text-xl font-semibold text-gray-700'>
								<Link
									to={'/'}
									className='text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-300'
								>
									RickAndMorty
								</Link>
							</div>

							<div className='flex md:hidden'>
								<button
									type='button'
									className='text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400'
									aria-label='toggle menu'
								>
									<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
										<path
											fillRule='evenodd'
											d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
										></path>
									</svg>
								</button>
							</div>
						</div>

						<div className='flex-1 md:flex md:items-center md:justify-between'>
							<div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
								{links.map((link) => (
									<Link
										to={link.url}
										key={link.name}
										className='px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-200 hover:bg-gray-700'
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navegation;
