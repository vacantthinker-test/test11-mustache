/**
 * 解析模板, 以字符串角度
 * @param template 模板字符串
 * @returns {*[]}
 */
import {Scanner} from "./Scanner";
import {nestedTokens} from "./nestedTokens";

export function parseTemplate(template) {
	if (!template) return
	
	let tokens = []
	const scanner = new Scanner(template)
	const tagStart = '{{'
	const tagEnd = '}}'
	while (!scanner.eos()) {
		// 遇到{{ 标签, 如下处理. 扫描并获取 {{标签前的内容
		let text = scanner.scanUtil(tagStart);
		if (text !== '') {
			tokens.push(['text', text])
		}
		scanner.scan(tagStart);
		
		// 遇到}} 标签, 如下处理. 扫描并获取 }}标签前的内容
		let name = scanner.scanUtil(tagEnd);
		if (name !== '') {
			let type = name[0]
			let value = name.substring(1)
			switch (type) {
				case '#':
					tokens.push(['#', value])
					break
				case '/':
					tokens.push(['/', value])
					break
				default:
					tokens.push(['name', name])
					break
			}
		}
		scanner.scan(tagEnd);
		
	}
	// console.log('tokens')
	// console.log(tokens)
	
	// 考虑到嵌套情况
	return nestedTokens(tokens) || [];
}
