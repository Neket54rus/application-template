import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '@/features/LangSwitcher';

interface PageErrorProps {
	className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
	const { className } = props;

	const { t } = useTranslation();

	const reloadPage = () => location.reload();

	return (
		<div className={className}>
			<p>{t('An unexpected error has occurred')}</p>
			<button type='button' onClick={reloadPage}>
				{t('Refresh the page')}
			</button>
			<LangSwitcher />
		</div>
	);
});
