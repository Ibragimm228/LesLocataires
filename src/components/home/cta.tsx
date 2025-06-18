export function CallToActionSection() {
	return (
		<section 
			className='py-20 lg:py-24 bg-slate-900 relative overflow-hidden' 
			role='region' 
			aria-labelledby='cta-heading'
		>
			{/* Premium Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-5 pointer-events-none' aria-hidden='true'>
				<div 
					className='absolute inset-0' 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm0-30h30v30H30V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}
				></div>
			</div>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' aria-hidden='true'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
					{/* Content Side */}
					<div className='space-y-8'>
						{/* Premium Badge */}
						<div className='inline-flex items-center' role='text'>
							<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-400 mr-4' aria-hidden='true'></div>
							<span className='text-sm font-medium text-slate-400 tracking-wider uppercase'>
								Stay Connected
							</span>
						</div>

						{/* Main Heading - SEO Optimized */}
						<header className='space-y-6'>
							<h2 
								id='cta-heading' 
								className='text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight'
							>
								Ready to Find Your
								<span className='block font-medium bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
									Perfect Home?
								</span>
							</h2>
							<div className='w-16 h-0.5 bg-white' aria-hidden='true'></div>
						</header>

						{/* Description */}
						<p className='text-xl lg:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl'>
							Join thousands of satisfied tenants who discovered their dream properties through 
							Les Locataires. Get exclusive access to premium listings and expert guidance.
						</p>

						{/* Features List */}
						<div className='grid sm:grid-cols-2 gap-4 pt-4' role='list'>
							{[
								{ text: 'Exclusive property previews', icon: 'eye' },
								{ text: 'Expert rental guidance', icon: 'user' },
								{ text: 'Priority customer support', icon: 'clock' },
								{ text: 'Market insights & trends', icon: 'chart' }
							].map((feature, index) => (
								<div key={index} className='flex items-center space-x-3' role='listitem'>
									<div className='w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden='true'>
										<svg className='w-4 h-4 text-slate-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											{feature.icon === 'eye' && (
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
											)}
											{feature.icon === 'user' && (
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
											)}
											{feature.icon === 'clock' && (
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
											)}
											{feature.icon === 'chart' && (
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
											)}
										</svg>
									</div>
									<span className='text-slate-300 font-light'>{feature.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* CTA Side */}
					<div className='mt-12 lg:mt-0'>
						<div className='bg-white rounded-none border border-slate-200 p-8 lg:p-10 shadow-2xl'>
							{/* Form Header */}
							<div className='text-center mb-8'>
								<h3 className='text-2xl font-medium text-slate-900 mb-2'>
									Get Started Today
								</h3>
								<p className='text-slate-600'>
									Subscribe to receive exclusive property alerts and market insights
								</p>
							</div>

							{/* Newsletter Form - Accessible */}
							<form 
								className='space-y-6' 
								role='form' 
								aria-labelledby='newsletter-heading'
								onSubmit={(e) => {
									e.preventDefault();
									// Handle form submission
									window.location.href = '/contacts';
								}}
							>
								<div className='space-y-4'>
									{/* Email Input */}
									<div>
										<label htmlFor='email-input' className='block text-sm font-medium text-slate-700 mb-2'>
											Email Address
										</label>
										<input
											id='email-input'
											type='email'
											name='email'
											required
											className='w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200 text-slate-900 placeholder-slate-400'
											placeholder='Enter your email address'
											aria-describedby='email-description'
										/>
										<p id='email-description' className='mt-1 text-xs text-slate-500'>
											We respect your privacy and never share your information
										</p>
									</div>

									{/* Property Type Selection */}
									<div>
										<label htmlFor='property-type' className='block text-sm font-medium text-slate-700 mb-2'>
											Property Interest (Optional)
										</label>
										<select 
											id='property-type' 
											name='propertyType'
											className='w-full px-4 py-3 border border-slate-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors duration-200 text-slate-900 bg-white'
										>
											<option value=''>All Property Types</option>
											<option value='apartment'>Apartments</option>
											<option value='house'>Houses</option>
											<option value='studio'>Studios</option>
											<option value='loft'>Lofts</option>
											<option value='penthouse'>Penthouses</option>
										</select>
									</div>
								</div>

								{/* Submit Button */}
								<button
									type='submit'
									className='w-full bg-slate-900 text-white px-8 py-4 font-medium transition-all duration-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-white group'
									aria-describedby='button-description'
								>
									<span className='flex items-center justify-center space-x-3'>
										<span>Subscribe & Get Started</span>
										<svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
										</svg>
									</span>
								</button>
								<p id='button-description' className='text-xs text-slate-500 text-center'>
									Free to join • Unsubscribe anytime • No spam guarantee
								</p>
							</form>

							{/* Trust Indicators */}
							<div className='mt-8 pt-6 border-t border-slate-100'>
								<div className='grid grid-cols-3 gap-4 text-center'>
									<div>
										<div className='text-lg font-medium text-slate-900'>15K+</div>
										<div className='text-xs text-slate-600'>Active Users</div>
									</div>
									<div>
										<div className='text-lg font-medium text-slate-900'>98%</div>
										<div className='text-xs text-slate-600'>Satisfaction</div>
									</div>
									<div>
										<div className='text-lg font-medium text-slate-900'>24/7</div>
										<div className='text-xs text-slate-600'>Support</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Decorative Elements */}
				<div className='mt-20 flex justify-center items-center space-x-8' aria-hidden='true'>
					<div className='w-2 h-2 bg-slate-600 rounded-full'></div>
					<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent'></div>
					<div className='w-2 h-2 bg-slate-500 rounded-full'></div>
					<div className='w-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent'></div>
					<div className='w-2 h-2 bg-slate-600 rounded-full'></div>
				</div>
			</div>
		</section>
	)
}