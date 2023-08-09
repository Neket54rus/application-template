import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
	const { className } = props;

	const { t, i18n } = useTranslation();

	const language = i18n.language === 'ru' ? 'en' : 'ru';
	const translate = () => {
		i18n.changeLanguage(language);
	};

	return (
		<button className={className} onClick={translate} type='button'>
			{t('English')}
		</button>
	);
});
