import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<main role='main'>
			{/* Hero Section */}
			<section 
				className='py-20 lg:py-32 bg-white relative overflow-hidden' 
				role='region' 
				aria-labelledby='about-hero-heading'
			>
				{/* Subtle Background Pattern - Optimized for performance */}
				<div className='absolute inset-0 opacity-5 pointer-events-none' aria-hidden='true'>
					<div className='absolute inset-0' style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}></div>
				</div>

				<Container className='relative'>
					<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
						{/* Content Side */}
						<div className='space-y-10'>
							{/* Premium Badge */}
							<div className='inline-flex items-center' role='text'>
								<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
								<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>About Our Company</span>
							</div>

							{/* Main Heading - Optimized for SEO */}
							<header className='space-y-6'>
								<h1 id='about-hero-heading' className='text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[0.9]'>
									About
									<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
										Les Locataires
									</span>
								</h1>
								<div className='w-16 h-0.5 bg-slate-900' aria-hidden='true'></div>
							</header>

							{/* Description - Optimized for SEO */}
							<div className='space-y-6'>
								<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-xl'>
									Founded in 2018, Les Locataires has revolutionized the premium rental market by connecting 
									discerning tenants with exceptional properties worldwide.
								</p>
								<p className='text-lg text-slate-500 leading-relaxed max-w-xl'>
									We believe that finding the perfect home should be effortless, inspiring, and rewarding. 
									Our platform combines cutting-edge technology with personalized service to deliver 
									unparalleled rental experiences.
								</p>
							</div>
						</div>

						{/* Visual Side - Optimized for performance and accessibility */}
						<div className='relative' role='img' aria-labelledby='hero-image-caption'>
							<div className='relative group'>
								<div className='overflow-hidden' style={{ willChange: 'transform' }}>
									<img
										className='w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105'
										src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='Modern Les Locataires office space with contemporary design and premium rental consultation area'
										loading='eager'
										decoding='async'
										width='2026'
										height='600'
										fetchPriority='high'
									/>
								</div>
								<div className='absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none' aria-hidden='true'></div>
							</div>
							<span id='hero-image-caption' className='sr-only'>
								Les Locataires modern office environment showcasing our premium rental consultation services
							</span>
						</div>
					</div>
				</Container>
			</section>

			{/* Mission Section */}
			<section 
				className='py-20 lg:py-24 bg-slate-50 relative overflow-hidden' 
				role='region' 
				aria-labelledby='mission-heading'
			>
				<Container>
					<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
						{/* Visual Side */}
						<div className='relative lg:order-2' role='img' aria-labelledby='mission-image-caption'>
							<div className='relative group'>
								<div className='overflow-hidden' style={{ willChange: 'transform' }}>
									<img
										className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105'
										src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='Diverse Les Locataires team collaborating on premium rental solutions and client service strategies'
										loading='lazy'
										decoding='async'
										width='2084'
										height='500'
									/>
								</div>
							</div>
							<span id='mission-image-caption' className='sr-only'>
								Les Locataires team working together to deliver exceptional rental experiences
							</span>
						</div>

						{/* Content Side */}
						<div className='space-y-8 lg:order-1'>
							{/* Premium Badge */}
							<div className='inline-flex items-center' role='text'>
								<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
								<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>Our Mission</span>
							</div>

							<header className='space-y-6'>
								<h2 id='mission-heading' className='text-4xl lg:text-5xl font-light text-slate-900 leading-tight'>
									Redefining
									<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
										Rental Excellence
									</span>
								</h2>
								<div className='w-16 h-0.5 bg-slate-900' aria-hidden='true'></div>
							</header>

							<div className='space-y-6'>
								<p className='text-xl text-slate-600 leading-relaxed font-light'>
									At Les Locataires, we empower property seekers through innovative technology 
									and personalized service, making premium rentals accessible to everyone.
								</p>
								<p className='text-lg text-slate-500 leading-relaxed'>
									Our mission extends beyond simple property matching. We create meaningful 
									connections between tenants and landlords, fostering communities and 
									ensuring every rental experience exceeds expectations.
								</p>
							</div>

							{/* Mission Values */}
							<div className='space-y-6 pt-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1' aria-hidden='true'>
										<svg className='w-4 h-4 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
									</div>
									<div>
										<h3 className='font-medium text-slate-900 mb-1'>Quality Assurance</h3>
										<p className='text-slate-600 text-sm'>Every property undergoes rigorous verification and quality assessment</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1' aria-hidden='true'>
										<svg className='w-4 h-4 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
										</svg>
									</div>
									<div>
										<h3 className='font-medium text-slate-900 mb-1'>Innovation First</h3>
										<p className='text-slate-600 text-sm'>Cutting-edge technology for seamless property discovery and management</p>
									</div>
								</div>
								<div className='flex items-start space-x-4'>
									<div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1' aria-hidden='true'>
										<svg className='w-4 h-4 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
										</svg>
									</div>
									<div>
										<h3 className='font-medium text-slate-900 mb-1'>Customer Dedication</h3>
										<p className='text-slate-600 text-sm'>24/7 premium support ensuring exceptional service at every step</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Team Section */}
			<section 
				className='py-20 lg:py-24 bg-white relative overflow-hidden' 
				role='region' 
				aria-labelledby='team-heading'
			>
				{/* Subtle Background Pattern */}
				<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
					<div className='absolute inset-0' style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M40 40h40v40H40V40zm0-40h40v40H40V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}></div>
				</div>

				<Container className='relative'>
					{/* Header Section */}
					<header className='text-center mb-16 space-y-6'>
						{/* Premium Badge */}
						<div className='inline-flex items-center justify-center' role='text'>
							<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
							<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>
								Leadership Team
							</span>
							<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
						</div>

						{/* Main Heading - SEO Optimized */}
						<div className='space-y-4'>
							<h2 
								id='team-heading' 
								className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'
							>
								Meet Our
								<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
									Expert Team
								</span>
							</h2>
							<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
						</div>

						<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto'>
							Our passionate leaders bring decades of combined experience in real estate, 
							technology, and customer service to deliver exceptional rental solutions.
						</p>
					</header>

					{/* Team Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
						{/* Team Member 1 */}
						<article 
							className='group text-center space-y-6' 
							role='article' 
							aria-labelledby='member-1-name'
						>
							<div className='relative overflow-hidden'>
								<img
									className='w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105'
									src='https://media.glamour.com/photos/67b6680a5de0026df32d9ebe/1:1/w_2560%2Cc_limit/SCH%2520Color.jpeg'
									alt='Sarah Mitchell, Chief Executive Officer at Les Locataires, professional headshot'
									loading='lazy'
									decoding='async'
									width='1974'
									height='320'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' aria-hidden='true'></div>
							</div>
							<div className='space-y-3'>
								<h3 id='member-1-name' className='text-2xl font-medium text-slate-900'>Sarah Mitchell</h3>
								<p className='text-slate-600 font-medium'>Chief Executive Officer</p>
								<p className='text-slate-500 leading-relaxed'>
									With over 15 years in luxury real estate and proptech innovation, Sarah leads our vision 
									of transforming premium rental experiences through technology and exceptional service.
								</p>
							</div>
						</article>

						{/* Team Member 2 */}
						<article 
							className='group text-center space-y-6' 
							role='article' 
							aria-labelledby='member-2-name'
						>
							<div className='relative overflow-hidden'>
								<img
									className='w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105'
									src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Marcus Chen, Chief Technology Officer at Les Locataires, professional headshot'
									loading='lazy'
									decoding='async'
									width='1974'
									height='320'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' aria-hidden='true'></div>
							</div>
							<div className='space-y-3'>
								<h3 id='member-2-name' className='text-2xl font-medium text-slate-900'>Marcus Chen</h3>
								<p className='text-slate-600 font-medium'>Chief Technology Officer</p>
								<p className='text-slate-500 leading-relaxed'>
									A former Silicon Valley engineer with expertise in AI and machine learning, Marcus drives 
									our platform's advanced matching algorithms and seamless user experience innovations.
								</p>
							</div>
						</article>

						{/* Team Member 3 */}
						<article 
							className='group text-center space-y-6' 
							role='article' 
							aria-labelledby='member-3-name'
						>
							<div className='relative overflow-hidden'>
								<img
									className='w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105'
									src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Elena Rodriguez, Head of Customer Success at Les Locataires, professional headshot'
									loading='lazy'
									decoding='async'
									width='2070'
									height='320'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' aria-hidden='true'></div>
							</div>
							<div className='space-y-3'>
								<h3 id='member-3-name' className='text-2xl font-medium text-slate-900'>Elena Rodriguez</h3>
								<p className='text-slate-600 font-medium'>Head of Customer Success</p>
								<p className='text-slate-500 leading-relaxed'>
									With a background in hospitality and client relations, Elena ensures every Les Locataires 
									interaction exceeds expectations, building lasting relationships with our community.
								</p>
							</div>
						</article>
					</div>

					{/* Bottom Decorative Elements */}
					<div className='mt-20 flex justify-center items-center space-x-8' aria-hidden='true'>
						<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
						<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent'></div>
						<div className='w-2 h-2 bg-slate-300 rounded-full'></div>
						<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent'></div>
						<div className='w-2 h-2 bg-slate-200 rounded-full'></div>
					</div>
				</Container>
			</section>

			{/* Statistics Section */}
			<section 
				className='py-20 lg:py-24 bg-slate-50' 
				role='region' 
				aria-labelledby='stats-heading'
			>
				<Container>
					<div className='text-center mb-16'>
						<h2 id='stats-heading' className='text-4xl lg:text-5xl font-light text-slate-900 mb-6'>
							Our Impact in
							<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
								Numbers
							</span>
						</h2>
						<p className='text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto'>
							Since our founding, we've helped thousands find their perfect home through our innovative platform.
						</p>
					</div>

					<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
						{[
							{ number: '25K+', label: 'Properties Listed', description: 'Verified premium properties available' },
							{ number: '18K+', label: 'Happy Tenants', description: 'Successful rental placements completed' },
							{ number: '99%', label: 'Client Satisfaction', description: 'Customer satisfaction rating maintained' },
							{ number: '50+', label: 'Cities Covered', description: 'Global presence across major cities' }
						].map((stat, index) => (
							<div key={index} className='text-center' role='group' aria-labelledby={`stat-${index}`}>
								<div id={`stat-${index}`} className='text-4xl lg:text-5xl font-light text-slate-900 mb-2' aria-label={stat.description}>
									{stat.number}
								</div>
								<div className='text-lg font-medium text-slate-700 mb-1'>{stat.label}</div>
								<div className='text-sm text-slate-500'>{stat.description}</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	)
}