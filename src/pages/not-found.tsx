export function NotFoundPage() {
	return (
		<section 
			className='min-h-screen flex items-center justify-center bg-white relative overflow-hidden' 
			role='main' 
			aria-labelledby='error-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-5 pointer-events-none' aria-hidden='true'>
				<div className='absolute inset-0' style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					willChange: 'auto'
				}}></div>
			</div>

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center'>
				{/* Premium Badge */}
				<div className='inline-flex items-center mb-8' role='text' aria-label='Les Locataires error page'>
					<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
					<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>Les Locataires</span>
					<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
				</div>

				{/* Error Code */}
				<div className='space-y-6 mb-12'>
					<h1 
						id='error-heading' 
						className='text-8xl lg:text-9xl xl:text-[12rem] font-light text-slate-900 leading-none'
						aria-label='Error 404 - Page not found'
					>
						4
						<span className='bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
							0
						</span>
						4
					</h1>
					<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
				</div>

				{/* Error Message */}
				<header className='space-y-6 mb-12'>
					<h2 className='text-3xl lg:text-4xl font-light text-slate-900 leading-tight'>
						Page Not Found
					</h2>
					<div className='space-y-4 max-w-2xl mx-auto'>
						<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light'>
							The premium property you're searching for seems to have moved to a new address.
						</p>
						<p className='text-lg text-slate-500 leading-relaxed'>
							Don't worry – our curated collection of exceptional rental properties awaits you on our homepage.
						</p>
					</div>
				</header>

				{/* Navigation Actions */}
				<nav className='space-y-6' role='navigation' aria-label='Error page navigation'>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						{/* Primary CTA */}
						<a
							href='/'
							className='group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium text-lg hover:bg-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm min-w-[200px]'
							aria-label='Return to Les Locataires homepage'
						>
							<span className='mr-3'>Return Home</span>
							<svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
							</svg>
						</a>

						{/* Secondary CTA */}
						<a
							href='/properties'
							className='group inline-flex items-center text-slate-900 font-medium text-lg hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
							aria-label='Browse available properties'
						>
							<span className='mr-3'>Browse Properties</span>
							<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
						</a>
					</div>

					{/* Help Links */}
					<div className='pt-8 border-t border-slate-100 max-w-md mx-auto'>
						<p className='text-sm text-slate-500 mb-4'>Need assistance finding what you're looking for?</p>
						<div className='flex flex-wrap justify-center gap-6 text-sm'>
							<a 
								href='/contacts' 
								className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
								aria-label='Contact Les Locataires support'
							>
								Contact Support
							</a>
						</div>
					</div>
				</nav>

				{/* Decorative Elements */}
				<div className='absolute top-1/4 left-8 w-px h-16 bg-slate-200 hidden lg:block' aria-hidden='true'></div>
				<div className='absolute bottom-1/4 right-8 w-px h-20 bg-slate-200 hidden lg:block' aria-hidden='true'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full opacity-50' aria-hidden='true'></div>
			</div>

			{/* Schema.org structured data for SEO */}
			<script 
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "Page Not Found - Les Locataires",
						"description": "The requested page could not be found on Les Locataires premium rental platform",
						"url": typeof window !== 'undefined' ? window.location.href : '',
						"mainEntity": {
							"@type": "Organization",
							"name": "Les Locataires",
							"description": "Premier platform connecting discerning tenants with exceptional properties"
						}
					})
				}}
			/>
		</section>
	)
}
