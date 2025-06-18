import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section 
			className='relative bg-white overflow-hidden min-h-screen flex items-center'
			role='banner'
			aria-labelledby='hero-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-2 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}
				></div>
			</div>

			{/* Background image with overlay - Performance optimized */}
			<div className='absolute inset-0' role='img' aria-label='Premium rental property showcase background'>
				<div
					className={`absolute inset-0 bg-slate-100 transition-opacity duration-500 ${
						loaded ? 'opacity-0' : 'opacity-100'
					}`}
					style={{ zIndex: 1 }}
					aria-hidden='true'
				/>
				<img
					src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3'
					alt='Luxurious modern apartment interior showcasing premium rental properties available through Les Locataires platform'
					decoding='async'
					loading='eager'
					fetchpriority='high'
					className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
					srcSet='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.0.3 768w,
							https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3 1024w,
							https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3 1920w'
					sizes='100vw'
					onLoad={() => setLoaded(true)}
					style={{ zIndex: 2, position: 'relative', willChange: 'transform' }}
					width='1920'
					height='1080'
				/>
				<div
					className='absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70'
					style={{ zIndex: 3 }}
					aria-hidden='true'
				></div>
			</div>

			{/* Hero content */}
			<Container className='py-20 lg:py-32 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Content Side */}
					<div className='space-y-10'>
						{/* Premium Badge */}
						<div className='inline-flex items-center' role='text'>
							<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
							<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
								Premium Rental Platform
							</span>
							<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
						</div>

						{/* Main Heading - SEO Optimized */}
						<header className='space-y-6'>
							<h1 
								id='hero-heading' 
								className='text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[0.9]'
							>
								Discover Your
								<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
									Perfect Rental
								</span>
								<span className='block text-4xl lg:text-5xl xl:text-6xl font-light text-slate-600 mt-2'>
									with Les Locataires
								</span>
							</h1>
							<div className='w-20 h-0.5 bg-slate-900' aria-hidden='true'></div>
						</header>

						{/* Description - SEO Optimized */}
						<div className='space-y-6'>
							<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl'>
								Connect with exceptional rental properties through our premium platform. 
								Experience sophisticated matching, verified listings, and unparalleled service.
							</p>
							<p className='text-lg text-slate-500 leading-relaxed max-w-xl'>
								From luxury apartments to charming homes, discover your ideal living space 
								with confidence and ease.
							</p>
						</div>

						{/* CTA Buttons - Accessible and performance optimized */}
						<nav className='flex flex-col sm:flex-row gap-6 pt-4' role='navigation' aria-label='Primary navigation'>
							<a
								href='/properties'
								className='group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium text-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5'
								aria-label='Browse available rental properties'
							>
								<span className='mr-3'>Explore Properties</span>
								<svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
								</svg>
							</a>
							<a
								href='/about'
								className='group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-900 font-medium text-lg hover:border-slate-900 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5'
								aria-label='Learn more about Les Locataires services'
							>
								<span className='mr-3'>Learn More</span>
								<svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
							</a>
						</nav>

						{/* Trust Indicators - Accessible stats */}
						<div className='pt-8 border-t border-slate-100' role='region' aria-label='Platform statistics'>
							<div className='grid grid-cols-3 gap-6'>
								{[
									{ number: '15K+', label: 'Properties', description: 'Over 15,000 verified rental properties' },
									{ number: '98%', label: 'Satisfaction', description: '98% tenant satisfaction rating' },
									{ number: '24/7', label: 'Support', description: '24/7 premium customer support' }
								].map((stat, index) => (
									<div key={index} className='text-center sm:text-left' role='group' aria-labelledby={`stat-${index}`}>
										<div 
											id={`stat-${index}`} 
											className='text-2xl lg:text-3xl font-light text-slate-900 mb-1' 
											aria-label={stat.description}
										>
											{stat.number}
										</div>
										<div className='text-sm text-slate-500 font-medium'>{stat.label}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Visual Side - Hidden on smaller screens for performance */}
					<div className='hidden lg:block relative' role='img' aria-labelledby='visual-caption'>
						{/* Floating Quality Card */}
						<div className='absolute top-8 right-8 bg-white shadow-2xl border border-slate-100 p-6 max-w-xs z-10' role='complementary' aria-labelledby='quality-assurance'>
							<div className='space-y-4'>
								<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center' aria-hidden='true'>
									<svg className='w-6 h-6 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</div>
								<div>
									<h2 id='quality-assurance' className='font-medium text-slate-900 mb-1'>Verified Quality</h2>
									<p className='text-sm text-slate-600'>Every property verified and quality assured</p>
								</div>
							</div>
						</div>

						{/* Floating Matching Card */}
						<div className='absolute bottom-8 left-8 bg-white shadow-2xl border border-slate-100 p-6 max-w-xs z-10' role='complementary' aria-labelledby='smart-matching'>
							<div className='space-y-4'>
								<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center' aria-hidden='true'>
									<svg className='w-6 h-6 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
									</svg>
								</div>
								<div>
									<h2 id='smart-matching' className='font-medium text-slate-900 mb-1'>Smart Matching</h2>
									<p className='text-sm text-slate-600'>AI-powered property recommendations</p>
								</div>
							</div>
						</div>

						{/* Minimal Geometric Elements */}
						<div className='absolute top-1/4 left-1/4 w-2 h-2 bg-slate-200 rounded-full opacity-60' aria-hidden='true'></div>
						<div className='absolute bottom-1/4 right-1/4 w-px h-16 bg-slate-200' aria-hidden='true'></div>
						<div className='absolute top-1/2 right-1/3 w-px h-20 bg-slate-300' aria-hidden='true'></div>

						{/* Hidden caption for screen readers */}
						<span id='visual-caption' className='sr-only'>
							Les Locataires platform highlights featuring quality assurance and smart matching capabilities for premium rental properties
						</span>
					</div>
				</div>
			</Container>

			{/* Bottom Decorative Elements */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6' aria-hidden='true'>
				<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
				<div className='w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent'></div>
				<div className='w-2 h-2 bg-slate-300 rounded-full'></div>
				<div className='w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent'></div>
				<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
			</div>

			{/* Schema.org structured data for SEO */}
			<script type="application/ld+json" dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"name": "Les Locataires",
					"description": "Premium rental platform connecting tenants with exceptional properties",
					"url": "https://leslocataires.com",
					"logo": "https://leslocataires.com/logo.png",
					"sameAs": [
						"https://facebook.com/leslocataires",
						"https://twitter.com/leslocataires",
						"https://instagram.com/leslocataires"
					]
				})
			}} />
		</section>
	)
}