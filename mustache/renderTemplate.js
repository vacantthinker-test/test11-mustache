/**
 * 渲染模板
 * @param tokens
 * @param data
 * @returns {string}
 */
import {lookup} from "./lookup";
import {renderTemplateArray} from "./renderTemplateArray";

export function renderTemplate(tokens, data) {
	if (!tokens || !data) return
	
	let result = ''
	
	tokens.forEach(token => {
		let type = token[0];
		let value = token[1];
		switch (type) {
			case 'text':
				result += value;
				break
			case 'name':
				result += lookup(data, value)
				break
			case '#':
				result += renderTemplateArray(token, data)
				break
		}
	})
	
	return result || '';
}
