

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/', description: 'Return to homepage' },
			{ name: 'Properties', href: '/properties', description: 'Browse premium rental properties' },
			{ name: 'About', href: '/about', description: 'Learn about Les Locataires' },
			{ name: 'Blog', href: '/blog', description: 'Read property insights and news' },
			{ name: 'Contacts', href: '/contacts', description: 'Get in touch with our team' },
		],
		legal: [
			{ name: 'Privacy Policy', href: '/privacy-policy', description: 'View our privacy policy' }
		],
		social: [
			{ 
				name: 'Instagram', 
				href: 'https://instagram.com/leslocataires',
				description: 'Follow Les Locataires on Instagram',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path fillRule="evenodd" d="M12.017 0C8.396 0 7.826.011 6.624.06 2.728.227.227 2.728.06 6.624.011 7.826 0 8.396 0 12.017c0 3.585.011 4.155.06 5.303.167 3.896 2.668 6.397 6.564 6.564 1.148.049 1.718.06 5.303.06 3.585 0 4.155-.011 5.303-.06 3.896-.167 6.397-2.668 6.564-6.564.049-1.148.06-1.718.06-5.303 0-3.621-.011-4.191-.06-5.393C23.727 2.728 21.226.227 17.33.06 16.132.011 15.562 0 12.017 0zm0 2.165c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.679c-3.37 0-6.103 2.733-6.103 6.103S8.647 18.05 12.017 18.05s6.103-2.733 6.103-6.103S15.387 5.844 12.017 5.844zm0 10.07c-2.19 0-3.967-1.777-3.967-3.967s1.777-3.967 3.967-3.967 3.967 1.777 3.967 3.967-1.777 3.967-3.967 3.967zm7.743-10.338c0 .79-.641 1.431-1.431 1.431a1.431 1.431 0 110-2.862 1.431 1.431 0 011.431 1.431z" clipRule="evenodd" />
					</svg>
				)
			},
			{ 
				name: 'LinkedIn', 
				href: 'https://linkedin.com/company/leslocataires',
				description: 'Connect with Les Locataires on LinkedIn',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				)
			},
			{ 
				name: 'Twitter', 
				href: 'https://twitter.com/leslocataires',
				description: 'Follow Les Locataires on Twitter',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
						<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
					</svg>
				)
			}
		]
	}

	const currentYear = new Date().getFullYear()

	return (
		<footer 
			className="bg-slate-900 text-white relative overflow-hidden" 
			role="contentinfo"
			aria-labelledby="footer-heading"
		>
			{/* Subtle Background Pattern - Performance Optimized */}
			<div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
				<div 
					className="absolute inset-0" 
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						willChange: 'auto'
					}}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				{/* Main Footer Content */}
				<div className="py-16 lg:py-20">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
						{/* Brand Section */}
						<div className="lg:col-span-5 space-y-8">
							{/* Logo and Brand */}
							<div className="space-y-6">
								<div className="flex items-center space-x-3">
									{/* Premium Logo */}
									<div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center" aria-hidden="true">
										<svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l8-8-8-8" />
										</svg>
									</div>
									<div>
										<h2 id="footer-heading" className="text-xl font-medium text-white">Les Locataires</h2>
										<p className="text-sm text-slate-400">Premium Rental Solutions</p>
									</div>
								</div>

								{/* Brand Description */}
								<p className="text-lg text-slate-300 leading-relaxed max-w-md">
									Connecting discerning tenants with exceptional properties through 
									sophisticated matching and premium service excellence.
								</p>
							</div>

							{/* Contact Info */}
							<div className="space-y-4" role="region" aria-label="Contact information">
								<div className="flex items-center space-x-3">
									<div className="w-5 h-5 text-slate-400" aria-hidden="true">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<a 
										href="mailto:hello@leslocataires.com" 
										className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
										aria-label="Send email to Les Locataires"
									>
										hello@leslocataires.com
									</a>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-5 h-5 text-slate-400" aria-hidden="true">
										<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<a 
										href="tel:+1234567890" 
										className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
										aria-label="Call Les Locataires support"
									>
										+1 (234) 567-8900
									</a>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex items-center space-x-6" role="navigation" aria-label="Social media links">
								{navigation.social.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-slate-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm p-1"
										aria-label={item.description}
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.icon}
									</a>
								))}
							</div>
						</div>

						{/* Navigation Links */}
						<div className="lg:col-span-7">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
								{/* Main Navigation */}
								<div>
									<h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">
										Navigation
									</h3>
									<nav role="navigation" aria-label="Footer main navigation">
										<ul className="space-y-4">
											{navigation.main.map((item) => (
												<li key={item.name}>
													<a
														href={item.href}
														className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
														aria-label={item.description}
													>
														{item.name}
													</a>
												</li>
											))}
										</ul>
									</nav>
								</div>

								{/* Legal Links */}
								<div>
									<h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">
										Legal
									</h3>
									<nav role="navigation" aria-label="Footer legal navigation">
										<ul className="space-y-4">
											{navigation.legal.map((item) => (
												<li key={item.name}>
													<a
														href={item.href}
														className="text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
														aria-label={item.description}
													>
														{item.name}
													</a>
												</li>
											))}
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-slate-800 py-8">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
						{/* Copyright */}
						<p className="text-slate-400 text-sm">
							&copy; {currentYear} Les Locataires. All rights reserved.
						</p>

						{/* Additional Info */}
						<div className="flex items-center space-x-6 text-sm text-slate-400">
							<span>Premium Rental Platform</span>
							<div className="w-px h-4 bg-slate-700" aria-hidden="true"></div>
							<span>Est. 2024</span>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute top-8 right-8 w-px h-16 bg-gradient-to-b from-slate-700 to-transparent" aria-hidden="true"></div>
				<div className="absolute bottom-8 left-8 w-16 h-px bg-gradient-to-r from-slate-700 to-transparent" aria-hidden="true"></div>
			</div>
		</footer>
	)
}