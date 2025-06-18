import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import { Container } from './container'

const LINKS = [
	{
		label: 'Home',
		href: '/',
		ariaLabel: 'Navigate to home page'
	},
	{
		label: 'About',
		href: '/about',
		ariaLabel: 'Learn about Les Locataires'
	},
	{
		label: 'Blog',
		href: '/blog',
		ariaLabel: 'Read our latest articles and insights'
	},
	{
		label: 'Contacts',
		href: '/contacts',
		ariaLabel: 'Get in touch with Les Locataires'
	},
]

// Premium Logo Component with enhanced accessibility
function PremiumLogo() {
	return (
		<Link 
			to="/" 
			className="group focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-4 rounded-sm transition-all duration-300"
			aria-label="Les Locataires - Premium Rental Platform Home"
		>
			<div className="flex items-center space-x-4">
				{/* Premium Icon with sophisticated design */}
				<div className="relative">
					<div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-sm flex items-center justify-center group-hover:shadow-xl group-hover:shadow-slate-900/20 transition-all duration-500 group-hover:scale-105">
						<svg 
							className="w-8 h-8 text-white" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path 
								strokeLinecap="round" 
								strokeLinejoin="round" 
								strokeWidth={1.2} 
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
							/>
						</svg>
						{/* Inner glow */}
						<div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-sm" aria-hidden="true"></div>
					</div>
					{/* Outer glow effect */}
					<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-700 rounded-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md -z-10" aria-hidden="true"></div>
				</div>
				
				{/* Brand Text with premium typography */}
				<div className="space-y-1">
					<h1 className="text-3xl font-light text-slate-900 leading-none tracking-tight group-hover:text-slate-700 transition-colors duration-300">
						Les Locataires
					</h1>
					<div className="flex items-center space-x-2">
						<div className="w-8 h-px bg-slate-400" aria-hidden="true"></div>
						<span className="text-xs text-slate-500 font-medium tracking-[0.2em] uppercase">
							Premium Rentals
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<header 
			className="bg-gradient-to-b from-white to-slate-50/30 border-b border-slate-200/60 relative overflow-hidden" 
			role="banner"
			aria-label="Site header"
		>
			{/* Premium background pattern */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
				<div 
					className="absolute inset-0" 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M50 50m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}
				></div>
			</div>

			{/* Ambient lighting effect */}
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-radial from-slate-100/40 via-transparent to-transparent blur-3xl" aria-hidden="true"></div>

			<Container>
				<div className="py-8 lg:py-12 relative">
					{/* Split Layout: Logo Left, Navigation Right */}
					<div className="flex items-center justify-between mb-8">
						{/* Logo Section */}
						<div className="flex-shrink-0">
							<PremiumLogo />
						</div>

						{/* Main Navigation - Horizontal on Right */}
						<nav 
							className="hidden lg:flex" 
							role="navigation" 
							aria-label="Main navigation"
						>
							<div className="relative">
								{/* Navigation background */}
								<div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-slate-200/40 rounded-full shadow-lg shadow-slate-900/5" aria-hidden="true"></div>
								
								<ul className="relative flex items-center gap-1 px-6 py-3">
									{LINKS.map((item) => (
										<li key={item.label}>
											<Link
												to={item.href}
												className="group relative px-6 py-3 text-slate-700 font-medium text-lg hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-full"
												aria-label={item.ariaLabel}
											>
												<span className="relative z-10">{item.label}</span>
												{/* Premium hover background */}
												<div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
												{/* Active indicator */}
												<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</nav>
					</div>

					{/* Mobile Navigation - Vertical Stack */}
					<nav 
						className="lg:hidden flex justify-center mb-8" 
						role="navigation" 
						aria-label="Main navigation mobile"
					>
						<div className="relative">
							{/* Navigation background */}
							<div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-slate-200/40 rounded-2xl shadow-lg shadow-slate-900/5" aria-hidden="true"></div>
							
							<ul className="relative grid grid-cols-2 gap-2 p-4">
								{LINKS.map((item) => (
									<li key={item.label}>
										<Link
											to={item.href}
											className="group relative px-4 py-3 text-slate-700 font-medium text-base hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-xl text-center block"
											aria-label={item.ariaLabel}
										>
											<span className="relative z-10">{item.label}</span>
											{/* Premium hover background */}
											<div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>

					{/* Elegant Separator */}
					<div className="flex items-center justify-center space-x-6 mb-8" aria-hidden="true">
						<div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
						<div className="flex space-x-2">
							<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
							<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
							<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
						</div>
						<div className="w-20 h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent"></div>
					</div>

					{/* Category Navigation - Floating Sidebar Style */}
					<nav 
						className="flex justify-center" 
						role="navigation" 
						aria-label="Property categories"
					>
						{isLoading ? (
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-3 max-w-4xl">
								{Array.from({ length: 6 }).map((_, index) => (
									<div
										key={`skeleton-${index}`}
										className="h-12 w-full sm:w-28 bg-slate-100 rounded-xl animate-pulse"
										aria-hidden="true"
									></div>
								))}
							</div>
						) : (
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-3 max-w-5xl">
								{categories.map((category) => (
									<Link
										key={category}
										to={`/blog?type=${encodeURIComponent(category || '')}`}
										className="group relative px-6 py-3.5 bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl text-slate-600 font-medium text-sm tracking-wide hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-xl hover:shadow-slate-900/25 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-center min-w-[120px]"
										aria-label={`Browse ${category} properties`}
									>
										<span className="relative z-10 uppercase tracking-wider block">{category}</span>
										{/* Premium hover effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
									</Link>
								))}
							</div>
						)}
					</nav>
				</div>
			</Container>

			{/* Bottom premium accent */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" aria-hidden="true"></div>
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" aria-hidden="true"></div>
		</header>
	)
}