import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './nav-link';

export default function Header() {
	const isLoggedIn = false;

	return (
		<nav className='flex justify-between items-center w-full py-4 px-2 lg:px-8 text-center container mx-auto'>
			<div className='flex items-center gap-2'>
				<NavLink href="/" className='flex items-center gap-1 lg:gap-2 shrink-0'>
				<FileText className='w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition-transform duration-200 ease-in-out' />
				</NavLink>
				<NavLink href="/">
					<div className="flex items-center gap-2">
						<span className="lg:text-xl font-extrabold text-gray-900">Sommarily</span>
					</div>
				</NavLink>
			</div>
			<div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
				<NavLink href="/#pricing">Pricing</NavLink>
				{isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
			</div>
			<div className='flex'>
				{ isLoggedIn ? <div className='flex gap-2 items-center'>
					<NavLink href="/upload">Upload a PDF</NavLink>
					<div>Pro</div>
					<Button>User</Button>
				</div> 
				:
				<div>
					<NavLink href="/signin">Sign In</NavLink>
				</div>
				}
			</div>
		</nav>
	);
}