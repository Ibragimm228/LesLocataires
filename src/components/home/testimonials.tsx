const TESTIMONIALS = [
	{
		quote: "Les Locataires transformed my property search experience. Their curated selection of premium rentals and personalized service made finding my dream home effortless and enjoyable.",
		author: "Victoria Chen",
		title: "Investment Banker",
		image: "https://img.freepik.com/premium-photo/young-positive-modern-girl-sending-good-vibes-only-showing-v-sign-smiling-happy-standing-against-blue-background_1258-70318.jpg"
	},
	{
		quote: "The attention to detail and quality of properties on Les Locataires is unmatched. Every listing exceeded my expectations, and the platform made luxury living accessible and straightforward.",
		author: "Marcus Rodriguez",
		title: "Creative Director",
		image: "https://trendymen.ru/images/article1/122214/cover122214.jpg"
	},
	{
		quote: "As a frequent relocator, I've used many rental platforms. Les Locataires stands out with their sophisticated matching system and exceptional customer support that truly understands premium living.",
		author: "Sarah Williams",
		title: "Management Consultant",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	}
]

export function TestimonialsSection() {
	return (
		<section 
			className='py-20 lg:py-24 bg-slate-50 relative overflow-hidden' 
			role='region' 
			aria-labelledby='testimonials-heading'
		>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
							Client Testimonials
						</span>
						<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
					</div>

					{/* Main Heading - SEO Optimized */}
					<div className='space-y-4'>
						<h2 
							id='testimonials-heading' 
							className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight'
						>
							Trusted by
							<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
								Discerning Tenants
							</span>
						</h2>
						<div className='w-16 h-0.5 bg-slate-900 mx-auto' aria-hidden='true'></div>
					</div>

					{/* Description */}
					<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto'>
						Discover why professionals choose Les Locataires for their premium rental experiences. 
						Real stories from our satisfied clients.
					</p>
				</header>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10'>
					{TESTIMONIALS.map((testimonial, index) => (
						<article
							key={testimonial.author}
							className='group relative bg-white border border-slate-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:border-slate-200 hover:-translate-y-1 focus-within:shadow-2xl focus-within:border-slate-200 focus-within:-translate-y-1'
							role='article'
							aria-labelledby={`testimonial-author-${index}`}
						>
							{/* Quote Icon */}
							<div className='mb-6' aria-hidden='true'>
								<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300'>
									<svg 
										className='w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300' 
										fill='currentColor' 
										viewBox='0 0 24 24'
										focusable='false'
									>
										<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'/>
									</svg>
								</div>
							</div>

							{/* Quote Content */}
							<blockquote className='mb-8'>
								<p className='text-lg lg:text-xl text-slate-700 leading-relaxed font-light'>
									"{testimonial.quote}"
								</p>
							</blockquote>

							{/* Author Information */}
							<footer className='flex items-center space-x-4'>
								<div className='relative'>
									<img
										className='w-14 h-14 rounded-full object-cover border-2 border-slate-100 group-hover:border-slate-300 transition-colors duration-300'
										src={testimonial.image}
										alt={`${testimonial.author}, ${testimonial.title}`}
										loading='lazy'
										decoding='async'
										width='56'
										height='56'
									/>
									{/* Online Indicator */}
									<div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full' aria-hidden='true'></div>
								</div>
								<div className='space-y-1'>
									<h3 
										id={`testimonial-author-${index}`}
										className='text-lg font-medium text-slate-900'
									>
										{testimonial.author}
									</h3>
									<p className='text-sm text-slate-500 font-medium'>
										{testimonial.title}
									</p>
								</div>
							</footer>

							{/* Subtle Hover Line */}
							<div className='absolute bottom-0 left-8 right-8 h-px bg-slate-900 transform scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-300 origin-left' aria-hidden='true'></div>
						</article>
					))}
				</div>

				{/* Trust Indicators */}
				<div className='mt-16 pt-16 border-t border-slate-200' role='region' aria-label='Trust indicators'>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
						{[
							{ number: '15K+', label: 'Happy Tenants', description: 'Over 15,000 satisfied clients' },
							{ number: '4.9/5', label: 'Average Rating', description: '4.9 out of 5 star rating' },
							{ number: '98%', label: 'Satisfaction Rate', description: '98% customer satisfaction' }
						].map((metric, index) => (
							<div key={index} className='space-y-2' role='group' aria-labelledby={`trust-metric-${index}`}>
								<div 
									id={`trust-metric-${index}`}
									className='text-3xl lg:text-4xl font-light text-slate-900' 
									aria-label={metric.description}
								>
									{metric.number}
								</div>
								<div className='text-sm text-slate-500 font-medium uppercase tracking-wider'>
									{metric.label}
								</div>
							</div>
						))}
					</div>
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