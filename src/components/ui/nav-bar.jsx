import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export function Nav() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY === 0) {
				setIsVisible(true)
				setLastScrollY(0)
				return
			}
			if (Math.abs(currentScrollY - lastScrollY) < 10) {
				return
			}
			setIsVisible(currentScrollY < lastScrollY)
			setLastScrollY(currentScrollY)
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<nav
			className={`
        bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-20
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
		>
			<div className="sticky top-0 z-20 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
				<div className="flex h-16 w-full items-center justify-between px-8 md:px-16">
					<div className="text-xl font-bold text-white tracking-widest uppercase hover:text-zinc-400 transition-colors">
						<a href="#intro" > João </a>
					</div>

					<div className="flex gap-6 text-sm font-medium text-zinc-400">
						<a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
						<a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
						<a href="#contato" className="hover:text-white transition-colors">Contato</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
