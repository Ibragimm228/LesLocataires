import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<main className='min-h-screen bg-white'>
				{/* Hero Section with Loading State */}
				<section className='py-20 lg:py-24 bg-white relative overflow-hidden' role='region' aria-labelledby='blog-loading'>
					{/* Subtle Background Pattern */}
					<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
						<div 
							className='absolute inset-0' 
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								willChange: 'auto'
							}}
						></div>
					</div>

					<Container>
						<div className='text-center space-y-8'>
							{/* Premium Badge */}
							<div className='inline-flex items-center justify-center' role='text'>
								<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
								<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
									Les Locataires
								</span>
								<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
							</div>

							{/* Loading Heading */}
							<header className='space-y-4'>
								<h1 id='blog-loading' className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'>
									Insights &
									<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
										Stories
									</span>
								</h1>
								<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
							</header>

							{/* Loading Content */}
							<div className='max-w-2xl mx-auto space-y-4'>
								<div className='h-6 bg-slate-200 rounded animate-pulse'></div>
								<div className='h-4 bg-slate-200 rounded animate-pulse max-w-md mx-auto'></div>
							</div>
						</div>
					</Container>
				</section>

				{/* Loading Cards */}
				<section className='py-16 bg-slate-50' aria-label='Loading articles'>
					<Container>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{Array.from({ length: 6 }).map((_, index) => (
								<div
									key={`loading-${index}`}
									className='bg-white border border-slate-100 p-6 space-y-4 animate-pulse'
									aria-hidden='true'
								>
									<div className='h-48 bg-slate-200 rounded'></div>
									<div className='space-y-2'>
										<div className='h-4 bg-slate-200 rounded w-24'></div>
										<div className='h-6 bg-slate-200 rounded'></div>
										<div className='h-4 bg-slate-200 rounded w-32'></div>
									</div>
								</div>
							))}
						</div>
					</Container>
				</section>
			</main>
		)
	}

	if (isError) {
		return (
			<main className='min-h-screen bg-white'>
				{/* Error Hero Section */}
				<section className='py-20 lg:py-24 bg-white relative overflow-hidden' role='region' aria-labelledby='blog-error'>
					{/* Subtle Background Pattern */}
					<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
						<div 
							className='absolute inset-0' 
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								willChange: 'auto'
							}}
						></div>
					</div>

					<Container>
						<div className='text-center space-y-8 max-w-2xl mx-auto'>
							{/* Premium Badge */}
							<div className='inline-flex items-center justify-center' role='text'>
								<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
								<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
									Les Locataires
								</span>
								<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
							</div>

							{/* Error Heading */}
							<header className='space-y-4'>
								<h1 id='blog-error' className='text-4xl lg:text-5xl font-light text-slate-900 leading-tight'>
									Something went
									<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
										Wrong
									</span>
								</h1>
								<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
							</header>

							<p className='text-xl text-slate-600 leading-relaxed font-light'>
								We're experiencing some technical difficulties loading our insights. 
								Please try refreshing the page or check back later.
							</p>

							{/* Error CTA */}
							<nav className='pt-4' role='navigation' aria-label='Error page navigation'>
								<button
									onClick={() => window.location.reload()}
									className='group inline-flex items-center text-slate-900 font-medium text-lg hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm px-2 py-1'
									aria-label='Retry loading articles'
								>
									<span className='mr-3'>Try Again</span>
									<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
									<svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
									</svg>
								</button>
							</nav>
						</div>
					</Container>
				</section>
			</main>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<main className='min-h-screen bg-white'>
			{/* SEO Optimized Meta Information */}
			<div style={{ display: 'none' }} aria-hidden='true'>
				<h1>Les Locataires Premium Rental Insights - Property Blog</h1>
				<p>Discover expert insights, market trends, and premium property stories from Les Locataires. Your guide to luxury rental experiences.</p>
			</div>

			{/* Hero Section */}
			<section className='py-20 lg:py-24 bg-white relative overflow-hidden' role='region' aria-labelledby='blog-heading'>
				{/* Subtle Background Pattern - Optimized for performance */}
				<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
					<div 
						className='absolute inset-0' 
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							willChange: 'auto'
						}}
					></div>
				</div>

				<Container>
					<div className='text-center space-y-8'>
						{/* Premium Badge */}
						<div className='inline-flex items-center justify-center' role='text'>
							<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
							<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
								Les Locataires
							</span>
							<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
						</div>

						{/* Main Heading - SEO Optimized */}
						<header className='space-y-4'>
							<h1 id='blog-heading' className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'>
								Insights &
								<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
									Stories
								</span>
							</h1>
							<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
						</header>

						{/* Description */}
						<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto'>
							Explore expert insights, market trends, and inspiring stories from the world of premium rentals. 
							Stay informed with Les Locataires' curated collection of property expertise.
						</p>

						{/* Filter Display */}
						{type && (
							<div className='inline-flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-3 mt-8' role='status' aria-live='polite'>
								<span className='text-sm text-slate-600'>
									Showing articles in category:
								</span>
								<div className='inline-flex items-center gap-2'>
									<span className='px-3 py-1 bg-slate-900 text-white text-sm font-medium tracking-wide' style={{overflowWrap: "anywhere"}}>
										{type}
									</span>
									<Link 
										to='/blog'
										className='text-slate-500 hover:text-slate-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm p-1'
										aria-label={`Remove ${type} filter and show all articles`}
									>
										<X strokeWidth={1.5} className='w-4 h-4' />
									</Link>
								</div>
							</div>
						)}
					</div>
				</Container>
			</section>

			{/* Articles Section */}
			<section className='py-16 lg:py-20 bg-slate-50' role='region' aria-labelledby='articles-heading'>
				<Container>
					{/* Section Header */}
					<header className='mb-12'>
						<h2 id='articles-heading' className='sr-only'>
							{type ? `${type} Articles` : 'All Articles'}
						</h2>
					</header>

					{filteredArticles && filteredArticles.length > 0 ? (
						<>
							{/* Articles Grid */}
							<div 
								className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'
								role='feed'
								aria-label={type ? `${type} articles` : 'All articles'}
							>
								{filteredArticles?.map((article) => (
									<article key={article.id} className='group'>
										<ArticleCardMedium 
											article={article} 
										/>
									</article>
								))}
							</div>

							{/* Results Count */}
							<div 
								className='mt-16 text-center'
								role='status'
								aria-live='polite'
							>
								<p className='text-slate-500 text-sm'>
									Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
									{type && ` in ${type}`}
								</p>
								<div className='mt-4 flex justify-center items-center space-x-4' aria-hidden='true'>
									<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
									<div className='w-8 h-px bg-slate-200'></div>
									<div className='w-2 h-2 bg-slate-300 rounded-full'></div>
									<div className='w-8 h-px bg-slate-200'></div>
									<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
								</div>
							</div>
						</>
					) : (
						/* No Articles Found */
						<div className='text-center py-20 space-y-8'>
							{/* Empty State Icon */}
							<div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto' aria-hidden='true'>
								<svg className='w-8 h-8 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
								</svg>
							</div>

							{/* Empty State Content */}
							<div className='space-y-4'>
								<h3 className='text-2xl font-light text-slate-900'>
									No Articles Found
								</h3>
								<p className='text-slate-600 max-w-md mx-auto'>
									{type 
										? `We couldn't find any articles in the "${type}" category. Try browsing all articles or explore other categories.`
										: 'We couldn\'t find any articles at the moment. Please check back later for new insights and stories.'
									}
								</p>
							</div>

							{/* Empty State Actions */}
							{type && (
								<nav className='pt-4' role='navigation' aria-label='No articles found navigation'>
									<Link
										to='/blog'
										className='group inline-flex items-center text-slate-900 font-medium text-lg hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm px-2 py-1'
										aria-label='View all articles'
									>
										<span className='mr-3'>View All Articles</span>
										<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
										<svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
										</svg>
									</Link>
								</nav>
							)}
						</div>
					)}
				</Container>
			</section>
		</main>
	)
}