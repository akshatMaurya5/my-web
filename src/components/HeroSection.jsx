import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Akshat Maurya.
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					B.Tech - Dr. BR Ambedkar National Institute of Technology{' '}
					<br></br>
					ECE | 2024
				</p>
				<a
					href='https://drive.google.com/file/d/1Fxtimym_l4bxeGyIamZ5QcO8icagyCCl/view?usp=sharing'
					target="_blank" rel="noopener noreferrer"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
				>
					Resume
				</a>


			</div>
		</div>
	);
}

export default HeroSection;
