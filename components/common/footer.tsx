import React from 'react';

export default function Footer() {
	return (
		<footer className="w-full py-12 text-center text-sm text-gray-600 bg-gray-50">
			© {new Date().getFullYear()} Sommarily. All rights reserved.
		</footer>
	);
}