import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
	return (
		<>
			{/* Main Contact Section */}
			<section 
				className='py-24 lg:py-32 bg-white relative overflow-hidden' 
				role='main' 
				aria-labelledby='contact-heading'
			>
				{/* Subtle Background Pattern - Optimized for performance */}
				<div className='absolute inset-0 opacity-3 pointer-events-none' aria-hidden='true'>
					<div 
						className='absolute inset-0' 
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							willChange: 'auto'
						}}
					></div>
				</div>

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
					<div className='grid lg:grid-cols-2 gap-20 items-start'>
						{/* Contact Information Side */}
						<div className='space-y-12'>
							{/* Premium Badge */}
							<div className='inline-flex items-center' role='text'>
								<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
								<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>Connect With Us</span>
							</div>

							{/* Main Heading - SEO Optimized */}
							<header className='space-y-6'>
								<h1 id='contact-heading' className='text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[0.9]'>
									Get in
									<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
										Touch
									</span>
								</h1>
								<div className='w-16 h-0.5 bg-slate-900' aria-hidden='true'></div>
							</header>

							{/* Description */}
							<div className='space-y-6'>
								<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-xl'>
									Ready to find your perfect rental property? Our dedicated team at Les Locataires 
									is here to assist you every step of the way.
								</p>
								<p className='text-lg text-slate-500 leading-relaxed max-w-xl'>
									Whether you're a tenant seeking premium accommodations or a property owner looking 
									to connect with quality renters, we're committed to delivering exceptional service.
								</p>
							</div>

							{/* Contact Information */}
							<div className='space-y-8 py-8 border-t border-slate-100' role='region' aria-label='Contact information'>
								{/* Phone */}
								<div className='flex items-start space-x-4' role='group'>
									<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden='true'>
										<svg className='w-5 h-5 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
										</svg>
									</div>
									<div>
										<h2 className='font-medium text-slate-900 mb-1'>Call Us</h2>
										<a href='tel:+1-555-0123' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:text-slate-900'>
											+1 (555) 012-3456
										</a>
										<p className='text-sm text-slate-500 mt-1'>Available Mon-Fri, 9AM-6PM EST</p>
									</div>
								</div>

								{/* Email */}
								<div className='flex items-start space-x-4' role='group'>
									<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden='true'>
										<svg className='w-5 h-5 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
										</svg>
									</div>
									<div>
										<h2 className='font-medium text-slate-900 mb-1'>Email Us</h2>
										<a href='mailto:hello@leslocataires.com' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:text-slate-900'>
											hello@leslocataires.com
										</a>
										<p className='text-sm text-slate-500 mt-1'>We'll respond within 24 hours</p>
									</div>
								</div>

								{/* Address */}
								<div className='flex items-start space-x-4' role='group'>
									<div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0' aria-hidden='true'>
										<svg className='w-5 h-5 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
										</svg>
									</div>
									<div>
										<h2 className='font-medium text-slate-900 mb-1'>Visit Us</h2>
										<address className='text-slate-600 not-italic'>
											123 Premium Avenue<br />
											Downtown District<br />
											New York, NY 10001
										</address>
										<p className='text-sm text-slate-500 mt-1'>By appointment only</p>
									</div>
								</div>
							</div>

							{/* Business Hours */}
							<div className='py-8 border-t border-slate-100' role='region' aria-label='Business hours'>
								<h2 className='font-medium text-slate-900 mb-4'>Business Hours</h2>
								<div className='space-y-2 text-sm'>
									<div className='flex justify-between'>
										<span className='text-slate-600'>Monday - Friday</span>
										<span className='text-slate-900 font-medium'>9:00 AM - 6:00 PM</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-slate-600'>Saturday</span>
										<span className='text-slate-900 font-medium'>10:00 AM - 4:00 PM</span>
									</div>
									<div className='flex justify-between'>
										<span className='text-slate-600'>Sunday</span>
										<span className='text-slate-900 font-medium'>Closed</span>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form Side */}
						<div className='lg:pl-8'>
							{/* Form Header */}
							<div className='mb-8'>
								<h2 className='text-2xl lg:text-3xl font-light text-slate-900 mb-4'>
									Send us a Message
								</h2>
								<p className='text-slate-600 leading-relaxed'>
									Fill out the form below and we'll get back to you within 24 hours. 
									All fields marked with an asterisk (*) are required.
								</p>
							</div>

							{/* Contact Form Container */}
							<div className='bg-slate-50 border border-slate-100 p-8 lg:p-10'>
								<ContactForm />
							</div>

							{/* Additional Information */}
							<div className='mt-8 p-6 bg-white border border-slate-100'>
								<div className='flex items-start space-x-3'>
									<div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5' aria-hidden='true'>
										<svg className='w-4 h-4 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
										</svg>
									</div>
									<div>
										<h3 className='font-medium text-slate-900 mb-2'>Quick Response Guarantee</h3>
										<p className='text-sm text-slate-600 leading-relaxed'>
											Our premium service includes a 24-hour response guarantee for all inquiries. 
											For urgent matters, please call us directly during business hours.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className='absolute top-1/4 left-8 w-px h-32 bg-slate-200 opacity-30' aria-hidden='true'></div>
				<div className='absolute bottom-1/4 right-8 w-px h-40 bg-slate-200 opacity-30' aria-hidden='true'></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full opacity-40' aria-hidden='true'></div>
			</section>

			{/* Alternative Contact Methods Section */}
			<section className='py-16 bg-slate-50 border-t border-slate-100' role='region' aria-labelledby='alternative-contact-heading'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 id='alternative-contact-heading' className='text-3xl lg:text-4xl font-light text-slate-900 mb-4'>
							More Ways to Connect
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							Choose the communication method that works best for you
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* Live Chat */}
						<div className='bg-white border border-slate-100 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
							<div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 transition-colors duration-300' aria-hidden='true'>
								<svg className='w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
								</svg>
							</div>
							<h3 className='text-xl font-medium text-slate-900 mb-3'>Live Chat</h3>
							<p className='text-slate-600 mb-4'>Get instant answers to your questions with our live chat support</p>
							<button className='text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:text-slate-700'>
								Start Chat →
							</button>
						</div>

						{/* Schedule Call */}
						<div className='bg-white border border-slate-100 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
							<div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 transition-colors duration-300' aria-hidden='true'>
								<svg className='w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
								</svg>
							</div>
							<h3 className='text-xl font-medium text-slate-900 mb-3'>Schedule a Call</h3>
							<p className='text-slate-600 mb-4'>Book a personalized consultation at your convenience</p>
							<button className='text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:text-slate-700'>
								Book Now →
							</button>
						</div>

						{/* FAQ */}
						<div className='bg-white border border-slate-100 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
							<div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 transition-colors duration-300' aria-hidden='true'>
								<svg className='w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
							</div>
							<h3 className='text-xl font-medium text-slate-900 mb-3'>FAQ</h3>
							<p className='text-slate-600 mb-4'>Find quick answers to commonly asked questions</p>
							<a href='/faq' className='text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:text-slate-700'>
								View FAQ →
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}