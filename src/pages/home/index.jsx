import React from 'react';
import { Nav } from '../../components/ui/nav-bar';

function Home() {
	return (
		<div className="min-h-screen bg-zinc-950 text-gray-200">
			<Nav />
			<main className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-8">
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
					<div className="h-56 w-56 md:h-72 md:w-72 overflow-hidden rounded-full border border-zinc-800 shadow-2xl">
						<img
							src="/Profile.jpg"
							alt="Foto de perfil"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex flex-col space-y-4 text-center md:text-left font-mono">
						<h1 className="text-3xl md:text-5xl leading-snug tracking-tight text-white">
							Olá,<br />
							Eu sou João Pedro<br />
							Bem vindo(a) ao meu portfólio!
						</h1>
						<div className="flex justify-center md:justify-start gap-6 pt-4 text-zinc-400">
							{/* LinkedIn SVG */}
							<a href="https://www.linkedin.com/in/joaopedrocs12"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors">

								<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect width="4" height="12" x="2" y="9"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>

							{/* GitHub SVG */}
							<a href="https://github.com/jotaagit"
								target="_blank"
								rel="noopener noreferrer" className="hover:text-white transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
							</a>

							{/* Mail SVG */}
							<a href="https://mail.google.com/mail/?view=cm&fs=1&to=jpcs2006@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect width="20" height="16" x="2" y="4" rx="2"></rect>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
								</svg>
							</a>
						</div>




					</div>
				</div>
			</main>
			<section id="sobre" className="flex min-h-screen items-center justify-center bg-zinc-950 p-8 md:p-16 border-t border-zinc-900">
				<div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">

					<div className="flex-1 space-y-6 text-zinc-400 text-lg leading-relaxed">
						<h2 className="text-3xl font-bold text-white font-mono mb-6">&gt; sobre_mim</h2>
						<p>
							Sou um Desenvolvedor Full Stack e estudante de Sistemas de Informação na USP. Tenho paixão por construir aplicações completas, cuidando desde a modelagem do banco de dados até a interface final do usuário.
						</p>
						<p>
							No back-end, desenvolvo APIs robustas e escaláveis utilizando <strong className="text-zinc-200 font-medium">Java e Spring Boot</strong>, com gerenciamento de dados em <strong className="text-zinc-200 font-medium">PostgreSQL</strong>. No front-end, crio interfaces dinâmicas e responsivas utilizando <strong className="text-zinc-200 font-medium">JavaScript e React</strong>.
						</p>
						<p>
							Meu fluxo de trabalho é focado na eficiência e no terminal: sou um usuário dedicado de Arch Linux e escrevo meus códigos no Neovim. Quando não estou focado em programação, você geralmente me encontra resolvendo cubos mágicos, jogando xadrez ou torcendo para o Santos.
						</p>
					</div>

					<div className="md:w-1/3 w-full bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 shadow-xl">
						<h3 className="text-xl font-bold text-white font-mono mb-4">~/stack</h3>
						<div className="flex flex-wrap gap-3">
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">C</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">Python</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">Java Spring Boot</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">JavaScript</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">React & Next.js</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">PostgreSQL</span>
							<span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm font-mono border border-zinc-700">Git</span>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
}

export default Home;
