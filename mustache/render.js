import {parseTemplate} from "./parseTemplate";
import {renderTemplate} from "./renderTemplate";

/**
 * 根据模板和数据, 生成处理好的HTML字符串
 * @param template 模板
 * @param data 数据
 * @returns {string} HTML字符串
 */
export function render(template, data) {
	if (!template || !data) return
	
	let tokens = parseTemplate(template); // 解析模板, 返回tokens
	// 返回HTML字符串
	return renderTemplate(tokens, data); // 渲染模板, 根据tokens和data,
}
