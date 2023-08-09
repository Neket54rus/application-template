import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

export const App = memo(() => {
	const { t } = useTranslation();

	return (
		<div className='app'>
			<h1>{t('Hello, world')}</h1>
			<ThemeSwitcher />
			<LangSwitcher />
		</div>
	);
});
