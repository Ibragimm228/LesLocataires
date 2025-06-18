import { useGetArticles } from '@/hooks/useArticles'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section 
			className='py-20 lg:py-24 bg-white relative overflow-hidden' 
			role='region' 
			aria-labelledby='latest-articles-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
							Latest Insights
						</span>
						<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
					</div>

					{/* Main Heading - SEO Optimized */}
					<div className='space-y-4'>
						<h2 
							id='latest-articles-heading' 
							className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'
						>
							Featured
							<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
								Articles
							</span>
						</h2>
						<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
					</div>

					{/* Description */}
					<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto'>
						Discover expert insights, market trends, and valuable tips for your rental property journey. 
						Stay informed with our curated collection of premium content.
					</p>
				</header>

				{/* Articles Grid */}
				<div 
					className='grid gap-8 lg:gap-12 lg:grid-cols-2'
					role='main'
					aria-label='Latest property articles'
				>
					{isLoading ? (
						// Enhanced skeleton loading with proper accessibility
						Array.from({ length: 4 }).map((_, index) => (
							<div
								key={`skeleton-${index}`}
								className='group relative bg-slate-50 border border-slate-100 overflow-hidden h-96 animate-pulse'
								aria-hidden='true'
								role='article'
								aria-label='Loading article content'
							>
								<div className='p-8 space-y-6 h-full flex flex-col justify-between'>
									{/* Image skeleton */}
									<div className='w-full h-48 bg-slate-200 rounded-sm'></div>
									
									{/* Content skeleton */}
									<div className='space-y-4 flex-1'>
										<div className='space-y-2'>
											<div className='h-3 bg-slate-200 rounded w-20'></div>
											<div className='h-6 bg-slate-200 rounded w-4/5'></div>
											<div className='h-6 bg-slate-200 rounded w-3/4'></div>
										</div>
										<div className='space-y-2'>
											<div className='h-4 bg-slate-200 rounded w-full'></div>
											<div className='h-4 bg-slate-200 rounded w-5/6'></div>
											<div className='h-4 bg-slate-200 rounded w-3/4'></div>
										</div>
									</div>
									
									{/* Footer skeleton */}
									<div className='flex items-center justify-between pt-4 border-t border-slate-200'>
										<div className='h-4 bg-slate-200 rounded w-24'></div>
										<div className='h-4 bg-slate-200 rounded w-16'></div>
									</div>
								</div>
							</div>
						))
					) : (
						// Enhanced article cards with premium styling
						articles?.slice(0, 4).map((article, index) => (
							<article
								key={article.id}
								className='group relative bg-white border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-slate-200 hover:-translate-y-2 focus-within:shadow-2xl focus-within:border-slate-200 focus-within:-translate-y-2'
								role='article'
								aria-labelledby={`article-title-${article.id}`}
							>
								{/* Article Link - Accessible */}
								<a
									href={`/articles/${article.id}`}
									className='block h-full focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
									aria-labelledby={`article-title-${article.id}`}
									aria-describedby={`article-excerpt-${article.id}`}
								>
									{/* Article Image */}
									<div className='relative overflow-hidden h-64'>
										<img
											className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
											src={article.image || `https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
											alt={`Featured image for article: ${article.title}`}
											loading={index < 2 ? 'eager' : 'lazy'}
											decoding='async'
											width='1973'
											height='256'
											fetchPriority={index < 2 ? 'high' : 'auto'}
										/>
										
										{/* Category Badge */}
										{article.type && (
											<div className='absolute top-4 left-4'>
												<span className='inline-flex items-center px-3 py-1 text-xs font-medium bg-white/90 text-slate-700 backdrop-blur-sm border border-white/20'>
													{article.type}
												</span>
											</div>
										)}
										
										{/* Gradient Overlay */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' aria-hidden='true'></div>
									</div>

									{/* Article Content */}
									<div className='p-8 space-y-4'>
										{/* Article Meta */}
										<div className='flex items-center justify-between text-sm text-slate-500'>
											<time 
												dateTime={article.published_date || new Date().toISOString()}
												className='font-medium'
											>
												{article.published_date ? new Date(article.published_date).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric'
												}) : 'Recent'}
											</time>
											<span className='flex items-center space-x-1'>
												<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
												</svg>
												<span>{article.reading_time || '5 min read'}</span>
											</span>
										</div>

										{/* Article Title */}
										<h3 
											id={`article-title-${article.id}`}
											className='text-2xl font-medium text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300'
										>
											{article.title}
										</h3>

										{/* Article Excerpt */}
										<p 
											id={`article-excerpt-${article.id}`}
											className='text-slate-600 leading-relaxed line-clamp-3'
										>
											{article.summary || 'Discover valuable insights and expert advice for your rental property journey.'}
										</p>

										{/* Read More Indicator */}
										<div className='flex items-center pt-4 border-t border-slate-100'>
											<span className='text-sm font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-300 mr-2'>
												Read Article
											</span>
											<div className='w-6 h-px bg-slate-900 group-hover:w-8 transition-all duration-300' aria-hidden='true'></div>
											<svg className='w-4 h-4 ml-2 text-slate-900 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
											</svg>
										</div>
									</div>
								</a>

								{/* Subtle Hover Line */}
								<div className='absolute bottom-0 left-8 right-8 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-300 origin-left' aria-hidden='true'></div>
							</article>
						))
					)}
				</div>

				{/* View All Articles CTA */}
				<nav className='mt-16 text-center' role='navigation' aria-label='Articles navigation'>
					<a
						href='/articles'
						className='group inline-flex items-center justify-center px-8 py-4 text-slate-900 font-medium text-lg hover:text-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg'
						aria-label='View all articles about rental properties and real estate'
					>
						<span className='mr-3'>View All Articles</span>
						<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
						<svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
						</svg>
					</a>
				</nav>

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