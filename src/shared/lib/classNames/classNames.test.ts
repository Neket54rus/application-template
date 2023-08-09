import { Mods, classNames } from './classNames';

describe('shared/lib/classNames', () => {
	test('Корректное значение', () => {
		const mods: Mods = {
			firstModsClass: true,
			secondModsClass: false,
		};

		const expected = 'mainClass class1 class2 firstModsClass';

		expect(classNames('mainClass', mods, ['class1', 'class2'])).toBe(
			expected,
		);
	});

	test('Пустые значения', () => {
		expect(classNames('', {}, [])).toBe('');
	});

	test('Только главный класс', () => {
		expect(classNames('mainClass')).toBe('mainClass');
	});

	test('Только моды', () => {
		const mods: Mods = {
			firstModsClass: true,
			secondModsClass: false,
		};

		expect(classNames('', mods)).toBe(' firstModsClass');
	});

	test('Только второстепенные классы', () => {
		expect(classNames('', {}, ['class1'])).toBe(' class1');
	});
});
