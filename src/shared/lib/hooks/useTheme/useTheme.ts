import { useContext } from 'react';

import { Theme } from '@/shared/const/theme';

import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	document.body.className = theme || Theme.LIGHT;

	const toggleTheme = () => {
		let newTheme: Theme;

		switch (theme) {
		case Theme.LIGHT:
			newTheme = Theme.DARK;
			break;
		default:
			newTheme = Theme.LIGHT;
		}

		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem('theme', newTheme);
	};

	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	};
};
