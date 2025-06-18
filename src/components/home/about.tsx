export function AboutSection() {
	return (
		<section className='py-24 lg:py-32 bg-white relative overflow-hidden' role='region' aria-labelledby='about-heading'>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-5 pointer-events-none' aria-hidden='true'>
				<div className='absolute inset-0' style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					willChange: 'auto'
				}}></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='grid lg:grid-cols-2 gap-20 items-center'>
					{/* Content Side */}
					<div className='space-y-10'>
						{/* Premium Badge */}
						<div className='inline-flex items-center' role='text'>
							<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
							<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>Premium Rental Solutions</span>
						</div>

						{/* Main Heading - Optimized for SEO */}
						<header className='space-y-6'>
							<h1 id='about-heading' className='text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[0.9]'>
								Discover
								<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
									Les Locataires
								</span>
							</h1>
							<div className='w-16 h-0.5 bg-slate-900' aria-hidden='true'></div>
						</header>

						{/* Description - Optimized for SEO */}
						<div className='space-y-6'>
							<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-xl'>
								The premier platform connecting discerning tenants with exceptional properties. 
								We redefine rental experiences through sophisticated matching and premium service.
							</p>
							<p className='text-lg text-slate-500 leading-relaxed max-w-xl'>
								Our curated approach ensures every connection is meaningful, every property exceptional, 
								and every rental experience exceeds expectations.
							</p>
						</div>

						{/* Key Metrics - Accessible table structure */}
						<div className='py-8 border-t border-b border-slate-100' role='region' aria-label='Company statistics'>
							<div className='grid grid-cols-3 gap-8'>
								{[
									{ number: '15K+', label: 'Properties Listed', description: 'Over 15,000 verified properties available' },
									{ number: '98%', label: 'Client Satisfaction', description: '98% customer satisfaction rating' },
									{ number: '24/7', label: 'Premium Support', description: '24/7 premium customer support available' }
								].map((metric, index) => (
									<div key={index} className='text-center lg:text-left' role='group' aria-labelledby={`metric-${index}`}>
										<div id={`metric-${index}`} className='text-3xl lg:text-4xl font-light text-slate-900 mb-1' aria-label={metric.description}>
											{metric.number}
										</div>
										<div className='text-sm text-slate-500 font-medium'>{metric.label}</div>
									</div>
								))}
							</div>
						</div>

						{/* CTA - Accessible link */}
						<nav className='pt-4' role='navigation' aria-label='About page navigation'>
							<a
								href='/about'
								className='group inline-flex items-center text-slate-900 font-medium text-lg hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
								aria-label='Learn more about Les Locataires company story'
							>
								<span className='mr-3'>Learn Our Story</span>
								<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
								<svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
								</svg>
							</a>
						</nav>
					</div>

					{/* Visual Side - Optimized for performance and accessibility */}
					<div className='relative' role='img' aria-labelledby='image-caption'>
						{/* Main Image - Performance optimized */}
						<div className='relative group'>
							<div className='overflow-hidden' style={{ willChange: 'transform' }}>
								<img
									className='w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-105'
									src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Modern apartment interior showcasing Les Locataires premium rental properties with elegant furnishing and natural lighting'
									loading='lazy'
									decoding='async'
									width='2070'
									height='700'
									fetchPriority='high'
								/>
							</div>
							
							{/* Subtle Overlay */}
							<div className='absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none' aria-hidden='true'></div>
						</div>

						{/* Floating Elements - Accessible cards */}
						<div className='absolute -bottom-8 -left-8 bg-white shadow-2xl border border-slate-100 p-8 max-w-xs' role='complementary' aria-labelledby='quality-card'>
							<div className='space-y-4'>
								<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center' aria-hidden='true'>
									<svg className='w-6 h-6 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</div>
								<div>
									<h2 id='quality-card' className='font-medium text-slate-900 mb-1'>Verified Quality</h2>
									<p className='text-sm text-slate-600'>Every property undergoes rigorous quality assessment</p>
								</div>
							</div>
						</div>

						<div className='absolute -top-8 -right-8 bg-white shadow-2xl border border-slate-100 p-8 max-w-xs' role='complementary' aria-labelledby='matching-card'>
							<div className='space-y-4'>
								<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center' aria-hidden='true'>
									<svg className='w-6 h-6 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
									</svg>
								</div>
								<div>
									<h2 id='matching-card' className='font-medium text-slate-900 mb-1'>Instant Matching</h2>
									<p className='text-sm text-slate-600'>Advanced algorithms for perfect property matches</p>
								</div>
							</div>
						</div>

						{/* Minimal Geometric Elements - Decorative only */}
						<div className='absolute top-1/3 -left-4 w-px h-24 bg-slate-200' aria-hidden='true'></div>
						<div className='absolute bottom-1/3 -right-4 w-px h-32 bg-slate-200' aria-hidden='true'></div>
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full opacity-50' aria-hidden='true'></div>
						
						{/* Hidden caption for screen readers */}
						<span id='image-caption' className='sr-only'>
							Visual representation of Les Locataires premium rental platform featuring modern property interiors and quality assurance highlights
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}