import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
	const { className } = props;

	const { t } = useTranslation();
	const { theme, toggleTheme } = useTheme();

	return (
		<button className={className} onClick={toggleTheme} type='button'>
			{theme === Theme.LIGHT ? t('Light theme') : t('Dark theme')}
		</button>
	);
});
