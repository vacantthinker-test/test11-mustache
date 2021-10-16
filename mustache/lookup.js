/**
 * 查找 a.b.c 属性 在 data对象中的 值
 * @param dataObject
 * @param keyName
 * @returns {*}
 */
export function lookup(dataObject, keyName) {
	if (keyName !== '.' && keyName.indexOf('.') !== -1) {
		let obj = dataObject;
		const keys = keyName.split('.')
		keys.forEach(key => {
			obj = obj[key];
		})
		return obj
	}
	return dataObject[keyName]
}
