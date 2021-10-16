export class Scanner {
	constructor(template) { // 模板
		this.template = template;
		this.position = 0; // 指针
		this.tail = this.template; // 指针剩余部分 [没处理的部分]
	}
	
	scan(tag) {
		// 如果this.position没有移动到模板字符串末尾,
		// 并且this.tail 开头是tag --> {{ }}
		// 那么 移动指针, 更新尾巴
		if ((!this.eos()) && this.tail.indexOf(tag) === 0) {
			this.position += tag.length;
			this.tail = this.template.substring(this.position)
		} // 遇tag停下来
	}
	
	scanUtil(tag) {
		const start = this.position; // 标记开始位置
		// 如果this.position没有移动到模板字符串末尾,
		// 并且this.tail开头不是tag -> {{ }}
		// 那么移动指针this.position, 更新尾巴this.tail
		while ((!this.eos()) && this.tail.indexOf(tag) !== 0) {
			this.position++;
			this.tail = this.template.substring(this.position)
		} // 遇tag停下来
		
		// 返回 tag前 的内容
		return this.template.substring(start, this.position);
	}
	
	// 指针移动到字符串末尾了么?
	eos() {
		return this.position >= this.template.length;
	}
}
