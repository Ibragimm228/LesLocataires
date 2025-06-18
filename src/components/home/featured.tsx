import { useGetArticles } from '@/hooks/useArticles'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section 
			className='py-20 lg:py-24 bg-slate-50 relative overflow-hidden' 
			role='region' 
			aria-labelledby='featured-articles-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
							Curated Content
						</span>
						<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
					</div>

					{/* Main Heading - SEO Optimized */}
					<div className='space-y-4'>
						<h2 
							id='featured-articles-heading' 
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
						Handpicked insights and expert guidance to elevate your rental experience. 
						Discover the latest trends and premium property insights.
					</p>
				</header>

				{/* Articles Grid */}
				<div 
					className='grid gap-8 lg:grid-cols-3'
					role='feed'
					aria-label='Featured articles'
				>
					{isLoading ? (
						<>
							{Array.from({ length: 3 }).map((_, index) => (
								<div
									key={`skeleton-${index}`}
									className='group relative bg-white border border-slate-100 overflow-hidden transition-all duration-500 animate-pulse'
									aria-hidden='true'
								>
									{/* Image Skeleton */}
									<div className='aspect-[16/10] bg-slate-200'></div>
									
									{/* Content Skeleton */}
									<div className='p-8 space-y-4'>
										<div className='space-y-2'>
											<div className='h-3 bg-slate-200 rounded w-20'></div>
											<div className='h-6 bg-slate-200 rounded w-full'></div>
											<div className='h-6 bg-slate-200 rounded w-3/4'></div>
										</div>
										<div className='space-y-2'>
											<div className='h-4 bg-slate-200 rounded w-full'></div>
											<div className='h-4 bg-slate-200 rounded w-5/6'></div>
											<div className='h-4 bg-slate-200 rounded w-2/3'></div>
										</div>
										<div className='flex items-center justify-between pt-4'>
											<div className='h-4 bg-slate-200 rounded w-24'></div>
											<div className='h-8 w-8 bg-slate-200 rounded-full'></div>
										</div>
									</div>
								</div>
							))}
						</>
					) : (
						articles?.slice(0, 3).map((article, index) => (
							<article
								key={article.id}
								className='group relative bg-white border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-slate-200 hover:-translate-y-1 focus-within:shadow-2xl focus-within:border-slate-200 focus-within:-translate-y-1'
								role='article'
								aria-labelledby={`article-title-${article.id}`}
							>
								{/* Article Image */}
								<div className='aspect-[16/10] overflow-hidden relative'>
									<img
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
										src={article.image || `https://images.unsplash.com/photo-${
											index === 0 ? '1560518883-ce4632ac2f0e' :
											index === 1 ? '1560472354-b33ff0c44a43' :
											'1522708323-474aa3b3e295'
										}?q=80&w=800&auto=format&fit=crop`}
										alt={`${article.title} - Premium rental property article`}
										loading={index === 0 ? 'eager' : 'lazy'}
										decoding='async'
										width='800'
										height='500'
									/>
									
									{/* Category Badge */}
									<div className='absolute top-4 left-4'>
										<span className='inline-flex items-center px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-slate-700 border border-white/20'>
											{article.type || 'Premium'}
										</span>
									</div>

									{/* Subtle Overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' aria-hidden='true'></div>
								</div>

								{/* Article Content */}
								<div className='p-8 space-y-4'>
									{/* Article Meta */}
									<div className='flex items-center text-sm text-slate-500 space-x-2'>
										<time dateTime={article.published_date} className='font-medium'>
											{new Date(article.published_date || Date.now()).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'long',
												day: 'numeric'
											})}
										</time>
										<span aria-hidden='true'>•</span>
										<span>{article.reading_time || '5 min read'}</span>
									</div>

									{/* Article Title */}
									<h3 
										id={`article-title-${article.id}`}
										className='text-xl lg:text-2xl font-medium text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300'
									>
										<a 
											href={`/articles/${article.id}`}
											className='focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
											aria-describedby={`article-excerpt-${article.id}`}
										>
											<span className='absolute inset-0' aria-hidden='true'></span>
											{article.title}
										</a>
									</h3>

									{/* Article Excerpt */}
									<p 
										id={`article-excerpt-${article.id}`}
										className='text-slate-600 leading-relaxed line-clamp-3'
									>
										{article.summary || 'Discover expert insights and premium guidance for your rental journey with Les Locataires comprehensive property expertise.'}
									</p>

									{/* Article Footer */}
									<div className='flex items-center justify-between pt-4 border-t border-slate-100'>
										<div className='flex items-center space-x-3'>
											<img
												className='w-8 h-8 rounded-full object-cover'
												src={article.avatar || `https://images.unsplash.com/photo-${
													index === 0 ? '1472099645785-5658abf4ff4e' :
													index === 1 ? '1507003211169-0a1dd7228f2d' :
													'1494790108755-2616c2f81fe6'
												}?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3`}
												alt={`${article.author || 'Les Locataires Expert'} profile picture`}
												loading='lazy'
												decoding='async'
												width='32'
												height='32'
											/>
											<span className='text-sm font-medium text-slate-700'>
												{article.author || 'Les Locataires'}
											</span>
										</div>

										{/* Read More Arrow */}
										<div className='opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300' aria-hidden='true'>
											<svg className='w-5 h-5 text-slate-400 group-hover:text-slate-900 group-focus-within:text-slate-900 transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
											</svg>
										</div>
									</div>

									{/* Subtle Hover Line */}
									<div className='absolute bottom-0 left-8 right-8 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-300 origin-left' aria-hidden='true'></div>
								</div>
							</article>
						))
					)}
				</div>

				{/* View All Articles CTA */}
				<nav className='mt-16 text-center' role='navigation' aria-label='Articles navigation'>
					<a
						href='/articles'
						className='group inline-flex items-center text-slate-900 font-medium text-lg hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
						aria-label='View all Les Locataires articles and insights'
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