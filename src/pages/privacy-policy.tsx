import React from 'react'

export const PrivacyPolicyPage: React.FC = () => {
	return (
		<main className='min-h-screen bg-white relative overflow-hidden' role='main' aria-labelledby='privacy-heading'>
			{/* Subtle Background Pattern - Optimized for performance */}
			<div className='absolute inset-0 opacity-5 pointer-events-none' aria-hidden='true'>
				<div className='absolute inset-0' style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					willChange: 'auto'
				}}></div>
			</div>

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative'>
				{/* Premium Badge */}
				<div className='inline-flex items-center mb-12' role='text'>
					<div className='h-px w-12 bg-gradient-to-r from-transparent to-slate-300 mr-4' aria-hidden='true'></div>
					<span className='text-sm font-medium text-slate-600 tracking-wider uppercase'>Les Locataires</span>
					<div className='h-px w-12 bg-gradient-to-l from-transparent to-slate-300 ml-4' aria-hidden='true'></div>
				</div>

				{/* Header Section */}
				<header className='mb-16 text-center lg:text-left'>
					<h1 id='privacy-heading' className='text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight mb-6'>
						Privacy
						<span className='block font-medium bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>
							Policy
						</span>
					</h1>
					<div className='w-16 h-0.5 bg-slate-900 mx-auto lg:mx-0 mb-8' aria-hidden='true'></div>
					<p className='text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0'>
						Your privacy and data security are fundamental to our premium rental platform. 
						We maintain the highest standards of data protection and transparency.
					</p>
					<p className='text-sm text-slate-500 mt-4'>
						Last updated: June 18, 2025
					</p>
				</header>

				{/* Content Navigation */}
				<nav className='mb-12 p-6 bg-slate-50 border border-slate-100' role='navigation' aria-label='Privacy policy sections'>
					<h2 className='text-lg font-medium text-slate-900 mb-4'>Quick Navigation</h2>
					<ul className='grid sm:grid-cols-2 gap-2 text-sm'>
						<li><a href='#information-collection' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Information Collection</a></li>
						<li><a href='#data-usage' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Data Usage</a></li>
						<li><a href='#data-protection' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Data Protection</a></li>
						<li><a href='#third-parties' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Third Parties</a></li>
						<li><a href='#children-privacy' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Children's Privacy</a></li>
						<li><a href='#contact-us' className='text-slate-600 hover:text-slate-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'>Contact Information</a></li>
					</ul>
				</nav>

				{/* Privacy Policy Content */}
				<article className='prose prose-lg prose-slate max-w-none' role='article'>
					{/* Information Collection */}
					<section id='information-collection' className='mb-12' aria-labelledby='collection-heading'>
						<h2 id='collection-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Information Collection</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								Your privacy is paramount to Les Locataires. This Privacy Policy explains how we collect, 
								use, disclose, and safeguard your information when you utilize our premium rental platform 
								and related services.
							</p>
							<p>
								We collect information through various channels, including personal data you provide directly 
								during account creation, property inquiries, and automated data collected through your 
								interaction with our sophisticated matching algorithms and platform features.
							</p>
						</div>
					</section>

					{/* Data Usage */}
					<section id='data-usage' className='mb-12' aria-labelledby='usage-heading'>
						<h2 id='usage-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Data Usage & Personalization</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								The information we collect enables us to deliver a personalized, premium experience tailored 
								to your rental preferences. We use this data to enhance our platform functionality, improve 
								our property matching algorithms, and provide exceptional customer service that meets our 
								high standards.
							</p>
							<p>
								We maintain strict policies regarding data monetization: we do not sell, rent, or otherwise 
								commercialize your personal information to third parties. Your data serves solely to enhance 
								your Les Locataires experience.
							</p>
						</div>
					</section>

					{/* Data Protection */}
					<section id='data-protection' className='mb-12' aria-labelledby='protection-heading'>
						<h2 id='protection-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Security & Protection</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								We implement enterprise-grade security measures to safeguard your personal information, 
								including advanced encryption, secure data transmission protocols, and regular security 
								audits. Our commitment to data protection reflects our premium service standards.
							</p>
							<p>
								While we employ industry-leading security measures, we acknowledge that no digital 
								transmission or storage method is completely infallible. We continuously update our 
								security protocols to address emerging threats and maintain the highest protection standards.
							</p>
						</div>
					</section>

					{/* Third Parties */}
					<section id='third-parties' className='mb-12' aria-labelledby='third-parties-heading'>
						<h2 id='third-parties-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Third-Party Services</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								Our platform may integrate with carefully selected third-party services to enhance your 
								experience, such as payment processors, property verification services, and communication 
								tools. Any information shared with these vetted partners is subject to their respective 
								privacy policies and our strict data sharing agreements.
							</p>
							<p>
								We regularly audit our third-party partnerships to ensure they maintain privacy and 
								security standards that align with our premium service commitment and your expectations.
							</p>
						</div>
					</section>

					{/* Children's Privacy */}
					<section id='children-privacy' className='mb-12' aria-labelledby='children-heading'>
						<h2 id='children-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Children's Privacy Protection</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								Les Locataires is committed to protecting children's privacy. Our premium rental services 
								are designed for individuals aged 18 and above. We do not knowingly collect personal 
								information from individuals under 18 years of age.
							</p>
							<p>
								If we discover that we have inadvertently collected information from someone under 18, 
								we will promptly delete such information from our systems and take appropriate measures 
								to prevent similar occurrences.
							</p>
						</div>
					</section>

					{/* Policy Updates */}
					<section className='mb-12' aria-labelledby='updates-heading'>
						<h2 id='updates-heading' className='text-2xl lg:text-3xl font-light text-slate-900 mb-6 flex items-center'>
							<span className='mr-4'>Policy Updates & Consent</span>
							<div className='flex-1 h-px bg-slate-200' aria-hidden='true'></div>
						</h2>
						<div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
							<p>
								We periodically review and update this Privacy Policy to reflect evolving best practices, 
								legal requirements, and service enhancements. We will notify you of significant changes 
								through our platform and provide you the opportunity to review updated terms.
							</p>
							<p>
								By utilizing our Les Locataires platform, you acknowledge that you have read, understood, 
								and agree to be bound by this Privacy Policy and any future updates.
							</p>
						</div>
					</section>
				</article>

				{/* Contact Section */}
				<section id='contact-us' className='mt-16 p-8 bg-slate-50 border border-slate-100' role='region' aria-labelledby='contact-heading'>
					<h2 id='contact-heading' className='text-2xl font-light text-slate-900 mb-6'>Privacy Concerns & Data Rights</h2>
					<div className='space-y-4 text-slate-700 leading-relaxed'>
						<p>
							We are committed to maintaining data accuracy and respecting your privacy rights. 
							If you notice inaccuracies in your personal data or wish to exercise your privacy rights, 
							please contact our dedicated privacy team.
						</p>
						<div className='pt-4'>
							<a 
								href='/contact' 
								className='group inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-sm'
								aria-label='Contact Les Locataires privacy team'
							>
								<span className='mr-3'>Contact Privacy Team</span>
								<div className='w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-300' aria-hidden='true'></div>
								<svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
								</svg>
							</a>
						</div>
					</div>
				</section>

				{/* Decorative Elements */}
				<div className='absolute top-1/4 left-8 w-px h-16 bg-slate-200 hidden lg:block' aria-hidden='true'></div>
				<div className='absolute bottom-1/4 right-8 w-px h-20 bg-slate-200 hidden lg:block' aria-hidden='true'></div>
			</div>

			{/* Schema.org structured data for SEO */}
			<script 
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "Privacy Policy - Les Locataires",
						"description": "Comprehensive privacy policy for Les Locataires premium rental platform, detailing data collection, usage, and protection practices",
						"url": typeof window !== 'undefined' ? window.location.href : '',
						"dateModified": "2025-06-18",
						"publisher": {
							"@type": "Organization",
							"name": "Les Locataires",
							"description": "Premier platform connecting discerning tenants with exceptional properties"
						},
						"mainEntity": {
							"@type": "PrivacyPolicy",
							"name": "Les Locataires Privacy Policy",
							"datePublished": "2025-06-18",
							"text": "Comprehensive privacy policy covering data collection, usage, security, and user rights for the Les Locataires premium rental platform"
						}
					})
				}}
			/>
		</main>
	)
}
