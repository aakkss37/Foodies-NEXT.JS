import HeaderBackground from '@/Components/MainHeader/HeaderBackground';
import './globals.css';
import Header from '@/Components/MainHeader/Header';

export const metadata = {
	title: 'NextLevel Food',
	description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<HeaderBackground />
				<Header />
				{children}
			</body>
		</html>
	);
}
