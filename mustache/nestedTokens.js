/**
 * mustache tokens一维数组变多维
 * @param tokens
 * @returns {string|*[]}
 */
export function nestedTokens(tokens) {
	if (!tokens) return
	// console.log(tokens)
	
	const stackTag = [] // 标签栈
	const stackContent = [
		[
			'', // 0 type
			'', // 1 value
			[]  // 2 Array
		]
	] // 内容栈
	
	// 以上就是整个流程. end.
	
	// 循环处理
	tokens.forEach(token => {
		let type = token[0] // token类型
		let value = token[1] // token 类型的值
		
		switch (type) { // 判断类型
			case '#': // # 入栈
				stackTag.push(type)
				stackContent.push([type, value, []])
				break
			
			case '/': // 出栈
				let popType = stackTag.pop();
				if (popType === '#' && type === '/') {
					let popElement = stackContent.pop();
					let top = stackContent[stackContent.length - 1]
					top[2].push(popElement);
				}
				break
			
			default: // 其他, 推入至顶层元素的第二个位置
				let top = stackContent[stackContent.length - 1]
				top[2].push(token)
				break
		}
	})
	// console.log(stackTag)
	// console.log(stackContent)
	
	return stackContent[0][2];
}
