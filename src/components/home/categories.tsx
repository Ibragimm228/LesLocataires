import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section 
			className='py-20 lg:py-24 bg-white relative overflow-hidden' 
			role='region' 
			aria-labelledby='categories-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M40 40h40v40H40V40zm0-40h40v40H40V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}
				></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Header Section */}
				<header className='text-center mb-16 space-y-6'>
					{/* Premium Badge */}
					<div className='inline-flex items-center justify-center' role='text'>
						<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
						<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
							Property Categories
						</span>
						<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
					</div>

					{/* Main Heading - SEO Optimized */}
					<div className='space-y-4'>
						<h2 
							id='categories-heading' 
							className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'
						>
							Explore by
							<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
								Category
							</span>
						</h2>
						<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
					</div>

					{/* Description */}
					<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto'>
						Discover exceptional properties tailored to your lifestyle. Browse our curated collection 
						of premium rentals by category.
					</p>
				</header>

				{/* Categories Grid */}
				<div 
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
					role='navigation'
					aria-label='Property categories'
				>
					{isLoading
						? Array.from({ length: 8 }).map((_, index) => (
								<div
									key={`skeleton-${index}`}
									className='group relative bg-slate-50 rounded-none border border-slate-100 p-8 h-40 animate-pulse'
									aria-hidden='true'
								>
									<div className='space-y-4'>
										<div className='w-12 h-12 bg-slate-200 rounded-full'></div>
										<div className='space-y-2'>
											<div className='h-4 bg-slate-200 rounded w-24'></div>
											<div className='h-3 bg-slate-200 rounded w-32'></div>
										</div>
									</div>
								</div>
						  ))
						: categories.map((category, index) => (
								<a
									key={category}
									href={`/blog?type=${encodeURIComponent(category || '')}`}
									className='group relative bg-white border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:border-slate-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:shadow-2xl focus:-translate-y-1'
									aria-label={`Browse ${category} properties`}
									role='button'
								>
									{/* Category Icon */}
									<div className='flex items-center justify-between mb-6'>
										<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300' aria-hidden='true'>
											<svg 
												className='w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300' 
												fill='none' 
												stroke='currentColor' 
												viewBox='0 0 24 24'
												focusable='false'
											>
												{/* Different icons for different categories */}
												{index % 4 === 0 && (
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z' />
												)}
												{index % 4 === 1 && (
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
												)}
												{index % 4 === 2 && (
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
												)}
												{index % 4 === 3 && (
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
												)}
											</svg>
										</div>
										
										{/* Arrow Icon */}
										<div className='opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300' aria-hidden='true'>
											<svg className='w-5 h-5 text-slate-400 group-hover:text-slate-900 group-focus:text-slate-900 transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
											</svg>
										</div>
									</div>

									{/* Category Content */}
									<div className='space-y-3'>
										<h3 className='text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-300'>
											{category}
										</h3>
										<p className='text-sm text-slate-500 leading-relaxed'>
											Discover premium {category?.toLowerCase()} properties
										</p>
									</div>

									{/* Subtle Hover Line */}
									<div className='absolute bottom-0 left-8 right-8 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left' aria-hidden='true'></div>
								</a>
						  ))
					}
				</div>

				{/* Bottom Decorative Elements */}
				<div className='mt-20 flex justify-center items-center space-x-8' aria-hidden='true'>
					<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
					<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent'></div>
					<div className='w-2 h-2 bg-slate-300 rounded-full'></div>
					<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent'></div>
					<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
				</div>
			</div>
		</section>
	)
}