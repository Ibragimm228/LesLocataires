import { useState, useEffect, useMemo } from 'react'

// Type definitions
interface Article {
	id: string
	title: string
	slug?: string
	type: string
	content?: string
	author: string
	publishedAt: string
	readTime: string
	image: string
	tags?: string[]
}

interface Comment {
	id: number
	name: string
	email: string
	message: string
	publishedAt: string
}

// Mock data for demonstration - replace with your actual hooks
const mockArticle: Article = {
	id: '1',
	title: 'The Ultimate Guide to Luxury Apartment Living in 2025',
	slug: 'luxury-apartment-living-guide-2025',
	type: 'Luxury Living',
	content: 'Discover the pinnacle of modern living with our comprehensive guide to luxury apartment rentals. From premium amenities to exclusive locations, learn how to find your perfect upscale home.',
	author: 'Sarah Mitchell',
	publishedAt: '2025-06-15',
	readTime: '8 min read',
	image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
	tags: ['Luxury', 'Apartments', 'Premium Living', 'Real Estate']
}

const mockArticles: Article[] = [
	{
		id: '2',
		title: 'Top 10 Neighborhoods for Young Professionals',
		type: 'Location Guide',
		author: 'David Chen',
		publishedAt: '2025-06-12',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
	},
	{
		id: '3',
		title: 'Furnished vs Unfurnished: Making the Right Choice',
		type: 'Rental Tips',
		author: 'Emma Thompson',
		publishedAt: '2025-06-10',
		readTime: '5 min read',
		image: 'https://images.unsplash.com/photo-1556912167-f556f1ae1075?q=80&w=2070&auto=format&fit=crop'
	},
	{
		id: '4',
		title: 'Sustainable Living in Modern Rentals',
		type: 'Sustainability',
		author: 'Alex Rivera',
		publishedAt: '2025-06-08',
		readTime: '7 min read',
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
	}
]

function ArticleHeader({ article }: { article: Article }) {
	return (
		<header className="mb-16 pb-16 border-b border-slate-100" role="banner">
			{/* Breadcrumb Navigation */}
			<nav className="mb-8" role="navigation" aria-label="Breadcrumb">
				<ol className="flex items-center space-x-2 text-sm text-slate-500">
					<li>
						<a 
							href="/" 
							className="hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm transition-colors duration-200"
							aria-label="Go to homepage"
						>
							Home
						</a>
					</li>
					<li aria-hidden="true" className="text-slate-300">/</li>
					<li>
						<a 
							href="/blog" 
							className="hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm transition-colors duration-200"
							aria-label="Go to blog"
						>
							Blog
						</a>
					</li>
					<li aria-hidden="true" className="text-slate-300">/</li>
					<li>
						<a 
							href={`/blog?type=${encodeURIComponent(article.type)}`}
							className="hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm transition-colors duration-200"
							aria-label={`Browse ${article.type} articles`}
						>
							{article.type}
						</a>
					</li>
					<li aria-hidden="true" className="text-slate-300">/</li>
					<li className="text-slate-700 font-medium" aria-current="page">
						{article.title}
					</li>
				</ol>
			</nav>

			{/* Article Meta */}
			<div className="mb-8">
				<div className='inline-flex items-center' role='text'>
					<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
					<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
						{article.type}
					</span>
				</div>
			</div>

			{/* Article Title */}
			<div className="space-y-6 mb-8">
				<h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight">
					{article.title}
				</h1>
				<div className='w-16 h-0.5 bg-slate-900' aria-hidden='true'></div>
			</div>

			{/* Article Meta Information */}
			<div className="flex flex-wrap items-center gap-6 text-slate-600" role="contentinfo">
				<div className="flex items-center space-x-3">
					<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center" aria-hidden="true">
						<svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
						</svg>
					</div>
					<div>
						<span className="text-sm text-slate-500">By</span>
						<span className="block font-medium text-slate-900">{article.author}</span>
					</div>
				</div>
				
				<div className="flex items-center space-x-2" role="group" aria-label="Article publication details">
					<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<time dateTime={article.publishedAt} className="text-sm">
						{new Date(article.publishedAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				</div>

				<div className="flex items-center space-x-2" role="group" aria-label="Reading time">
					<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span className="text-sm">{article.readTime}</span>
				</div>
			</div>
		</header>
	)
}

function ArticleNavigation({ currentArticle, articles }: { currentArticle: Article; articles: Article[] }) {
	const currentIndex = articles.findIndex((article: Article) => article.id === currentArticle.id)
	const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
	const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

	if (!prevArticle && !nextArticle) return null

	return (
		<nav 
			className="flex justify-between items-center py-8 mb-12 border-t border-b border-slate-100"
			role="navigation"
			aria-label="Article navigation"
		>
			<div className="flex-1">
				{prevArticle && (
					<a
						href={`/blog/${prevArticle.slug || prevArticle.id}`}
						className="group flex items-center space-x-4 p-4 hover:bg-slate-50 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
						aria-label={`Previous article: ${prevArticle.title}`}
					>
						<svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
						</svg>
						<div className="min-w-0">
							<div className="text-sm text-slate-500 mb-1">Previous</div>
							<div className="font-medium text-slate-900 truncate">{prevArticle.title}</div>
						</div>
					</a>
				)}
			</div>

			<div className="flex-1 text-right">
				{nextArticle && (
					<a
						href={`/blog/${nextArticle.slug || nextArticle.id}`}
						className="group flex items-center justify-end space-x-4 p-4 hover:bg-slate-50 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
						aria-label={`Next article: ${nextArticle.title}`}
					>
						<div className="min-w-0 text-right">
							<div className="text-sm text-slate-500 mb-1">Next</div>
							<div className="font-medium text-slate-900 truncate">{nextArticle.title}</div>
						</div>
						<svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				)}
			</div>
		</nav>
	)
}

function ArticleContent({ article }: { article: Article }) {
	return (
		<article className="prose prose-slate max-w-none" role="main">
			{/* Featured Image */}
			<figure className="mb-12">
				<div className="relative group overflow-hidden">
					<img
						src={article.image}
						alt={`Featured image for ${article.title}`}
						className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
						loading="eager"
						decoding="async"
						width="800"
						height="400"
						fetchPriority="high"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" aria-hidden="true"></div>
				</div>
			</figure>

			{/* Article Content */}
			<div className="space-y-6 text-lg leading-relaxed text-slate-700">
				<p className="text-xl lg:text-2xl font-light text-slate-600 leading-relaxed">
					{article.content}
				</p>
				
				<p>
					In today's competitive rental market, finding the perfect luxury apartment requires more than just browsing listings. 
					It demands a sophisticated understanding of what truly defines premium living and how to identify properties that 
					deliver exceptional value for discerning tenants.
				</p>

				<h2 className="text-3xl font-light text-slate-900 mt-12 mb-6">Essential Features of Luxury Living</h2>
				
				<p>
					Modern luxury apartments transcend traditional definitions of upscale living. Today's premium properties integrate 
					cutting-edge technology, sustainable design principles, and wellness-focused amenities that cater to the evolving 
					needs of sophisticated renters.
				</p>

				<p>
					From smart home automation systems to private wellness centers, luxury properties now offer an ecosystem of services 
					designed to enhance every aspect of daily life. These features aren't just amenities—they're essential components 
					of a lifestyle that values efficiency, comfort, and exclusivity.
				</p>

				<h2 className="text-3xl font-light text-slate-900 mt-12 mb-6">Location and Accessibility</h2>
				
				<p>
					The most desirable luxury apartments combine prime locations with exceptional accessibility. Premium properties 
					strategically position residents within walking distance of cultural attractions, fine dining establishments, 
					and professional districts while maintaining the tranquility essential for sophisticated living.
				</p>

				<p>
					Transportation connectivity remains a crucial factor, with the finest properties offering seamless access to 
					major transit hubs, airports, and highway systems. This balance of urban convenience and residential serenity 
					defines the modern luxury rental experience.
				</p>
			</div>

			{/* Article Tags */}
			<div className="mt-12 pt-8 border-t border-slate-100">
				<div className="flex flex-wrap gap-2" role="group" aria-label="Article tags">
					{article.tags?.map((tag: string, index: number) => (
						<a
							key={index}
							href={`/blog?tag=${encodeURIComponent(tag)}`}
							className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm"
							aria-label={`Browse articles tagged with ${tag}`}
						>
							{tag}
						</a>
					))}
				</div>
			</div>
		</article>
	)
}

function ArticleComments() {
	const [comments, setComments] = useState<Comment[]>([])
	const [newComment, setNewComment] = useState({ name: '', email: '', message: '' })
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		
		// Simulate API call
		setTimeout(() => {
			const comment: Comment = {
				id: Date.now(),
				...newComment,
				publishedAt: new Date().toISOString()
			}
			setComments(prev => [comment, ...prev])
			setNewComment({ name: '', email: '', message: '' })
			setIsSubmitting(false)
		}, 1000)
	}

	return (
		<section className="bg-white border border-slate-100 p-8" role="region" aria-labelledby="comments-heading">
			<header className="mb-8">
				<h2 id="comments-heading" className="text-2xl font-light text-slate-900 mb-2">
					Comments ({comments.length})
				</h2>
				<div className="w-12 h-0.5 bg-slate-900" aria-hidden="true"></div>
			</header>

			{/* Comment Form */}
			<form onSubmit={handleSubmit} className="space-y-6 mb-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label htmlFor="comment-name" className="block text-sm font-medium text-slate-700 mb-2">
							Name *
						</label>
						<input
							id="comment-name"
							type="text"
							required
							value={newComment.name}
							onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
							className="w-full px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200"
							aria-describedby="name-error"
						/>
					</div>
					<div>
						<label htmlFor="comment-email" className="block text-sm font-medium text-slate-700 mb-2">
							Email *
						</label>
						<input
							id="comment-email"
							type="email"
							required
							value={newComment.email}
							onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
							className="w-full px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200"
							aria-describedby="email-error"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="comment-message" className="block text-sm font-medium text-slate-700 mb-2">
						Message *
					</label>
					<textarea
						id="comment-message"
						rows={4}
						required
						value={newComment.message}
						onChange={(e) => setNewComment(prev => ({ ...prev, message: e.target.value }))}
						className="w-full px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
						aria-describedby="message-error"
					></textarea>
				</div>
				<button
					type="submit"
					disabled={isSubmitting || !newComment.name || !newComment.email || !newComment.message}
					className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
				>
					{isSubmitting ? 'Submitting...' : 'Post Comment'}
				</button>
			</form>

			{/* Comments List */}
			{comments.length > 0 && (
				<div className="space-y-6">
					{comments.map((comment) => (
						<article key={comment.id} className="border-l-4 border-slate-100 pl-6">
							<header className="flex items-center justify-between mb-3">
								<h3 className="font-medium text-slate-900">{comment.name}</h3>
								<time dateTime={comment.publishedAt} className="text-sm text-slate-500">
									{new Date(comment.publishedAt).toLocaleDateString()}
								</time>
							</header>
							<p className="text-slate-600 leading-relaxed">{comment.message}</p>
						</article>
					))}
				</div>
			)}
		</section>
	)
}

function ArticleSidebar({ articles, currentArticle }: { articles: Article[]; currentArticle: Article }) {
	const relatedArticles = useMemo(() => {
		return articles
			.filter((article: Article) => article.id !== currentArticle.id)
			.slice(0, 3)
	}, [articles, currentArticle.id])

	const popularArticles = useMemo(() => {
		return [...articles]
			.filter((article: Article) => article.id !== currentArticle.id)
			.sort(() => Math.random() - 0.5)
			.slice(0, 4)
	}, [articles, currentArticle.id])

	return (
		<aside className="space-y-12" role="complementary">
			{/* Latest Articles */}
			<section role="region" aria-labelledby="latest-heading">
				<header className="mb-6">
					<h2 id="latest-heading" className="text-xl font-light text-slate-900 mb-2">
						Latest Articles
					</h2>
					<div className="w-8 h-0.5 bg-slate-900" aria-hidden="true"></div>
				</header>
				<div className="space-y-6">
					{relatedArticles.map((article: Article) => (
						<article key={article.id} className="group">
							<a
								href={`/blog/${article.slug || article.id}`}
								className="block focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm"
								aria-label={`Read article: ${article.title}`}
							>
								<div className="flex space-x-4">
									<img
										src={article.image}
										alt=""
										className="w-20 h-20 object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity duration-200"
										loading="lazy"
										decoding="async"
										width="80"
										height="80"
									/>
									<div className="flex-1 min-w-0">
										<h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-200 line-clamp-2 mb-2">
											{article.title}
										</h3>
										<div className="flex items-center space-x-2 text-sm text-slate-500">
											<time dateTime={article.publishedAt}>
												{new Date(article.publishedAt).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric'
												})}
											</time>
											<span aria-hidden="true">•</span>
											<span>{article.readTime}</span>
										</div>
									</div>
								</div>
							</a>
						</article>
					))}
				</div>
			</section>

			{/* Popular Articles */}
			<section role="region" aria-labelledby="popular-heading">
				<header className="mb-6">
					<h2 id="popular-heading" className="text-xl font-light text-slate-900 mb-2">
						Popular Articles
					</h2>
					<div className="w-8 h-0.5 bg-slate-900" aria-hidden="true"></div>
				</header>
				<div className="space-y-4">
					{popularArticles.map((article: Article, index: number) => (
						<article key={article.id} className="group">
							<a
								href={`/blog/${article.slug || article.id}`}
								className="flex items-start space-x-4 p-3 hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm"
								aria-label={`Read popular article: ${article.title}`}
							>
								<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-medium text-slate-600">
									{index + 1}
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-200 line-clamp-2">
										{article.title}
									</h3>
									<div className="text-sm text-slate-500 mt-1">
										By {article.author}
									</div>
								</div>
							</a>
						</article>
					))}
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="bg-slate-50 p-8" role="region" aria-labelledby="newsletter-heading">
				<header className="mb-6">
					<h2 id="newsletter-heading" className="text-xl font-light text-slate-900 mb-2">
						Stay Updated
					</h2>
					<div className="w-8 h-0.5 bg-slate-900" aria-hidden="true"></div>
				</header>
				<p className="text-slate-600 mb-6 leading-relaxed">
					Get the latest insights on luxury rentals and premium living delivered to your inbox.
				</p>
				<div className="space-y-4" onClick={(e) => e.preventDefault()}>
					<div>
						<label htmlFor="newsletter-email" className="sr-only">
							Email address for newsletter
						</label>
						<input
							id="newsletter-email"
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-3 border border-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-slate-900 text-white py-3 px-6 font-medium hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
					>
						Subscribe
					</button>
				</div>
			</section>
		</aside>
	)
}

export function ArticlePage() {
	const [isLoading, setIsLoading] = useState(true)
	
	// Simulate loading
	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="animate-pulse space-y-8">
					<div className="h-8 bg-slate-200 rounded w-3/4"></div>
					<div className="h-4 bg-slate-200 rounded w-1/2"></div>
					<div className="h-96 bg-slate-200 rounded"></div>
					<div className="space-y-4">
						<div className="h-4 bg-slate-200 rounded"></div>
						<div className="h-4 bg-slate-200 rounded w-5/6"></div>
						<div className="h-4 bg-slate-200 rounded w-4/6"></div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Article Header */}
			<ArticleHeader article={mockArticle} />

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				{/* Left Column - Article Content */}
				<div className="lg:col-span-8">
					{/* Article Navigation */}
					<ArticleNavigation currentArticle={mockArticle} articles={mockArticles} />

					{/* Article Content */}
					<ArticleContent article={mockArticle} />
				</div>

				{/* Right Column - Sidebar */}
				<div className="lg:col-span-4">
					<ArticleSidebar articles={mockArticles} currentArticle={mockArticle} />
				</div>
			</div>

			{/* Comments Section - Full Width */}
			<div className="mt-16 pt-16 border-t border-slate-100">
				<div className="max-w-4xl">
					<ArticleComments />
				</div>
			</div>
		</div>
	)
}