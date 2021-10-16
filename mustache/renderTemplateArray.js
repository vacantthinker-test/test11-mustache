import {lookup} from "./lookup";
import {renderTemplate} from "./renderTemplate";

export function renderTemplateArray(token, data) {
	let result = ''
	let keyName = token[1]; //arr
	let scopeTemplate = token[2]
	let scopeDataArray = lookup(data, keyName); // arr对应的值
	
	scopeDataArray.forEach(scopeData => {
		let wrapperScodeData = {
			...scopeData,
			'.': scopeData
		}
		
		result += renderTemplate(scopeTemplate, wrapperScodeData)
	})
	
	return result;
}
