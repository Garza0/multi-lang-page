import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

export const translate = (key: string, language: string): string => {
	let langData: { [key: string]: string } = {};

	if (language === 'EN') {
		langData = en;
	} else if (language === 'RU') {
		langData = ru;
	} else if (language === 'UA') {
		langData = ua;
	}

	return langData[key];
}