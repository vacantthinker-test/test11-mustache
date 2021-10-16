# mustache 模板引擎 手写代码

---

数据如下:
```javascript
const data = {
	arr: [
			{name: 'Z', loves: ['work']},
			{name: 'L', loves: ['read', 'walk']},
			{name: 'K', loves: ['game', 'punch']},
    ]
}
```

模板如下:
```html
<ul>
    {{#arr}}
    <li>
        <span>{{name}}</span>
        <ul>
            {{#loves}}
            <li>{{.}}</li>
            {{/loves}}
        </ul>
    </li>
    {{/arr}}
</ul>

```

流程如下:

 - 1 把模板看作字符串, 转化为tokens
   - Scanner.js
     - 指针思想
       - 每次移动一个字符, 遇到{{ 停下来, 收集 {{ 前面的部分字符串
       - 每次移动一个字符, 遇到 }}停下来, 收集 {{ nameXXX }} 大括号中间的内容
   - parseTemplate.js
     - 使用Scanner处理模板字符串
     - 模板可能是多层次的, 即嵌套. --> 数组里面还有个数组.
     - nestedTokens.js来处理
   - nestedTokens.js
     - 使用栈思想
       - 遇到#arr, 入栈, 建立新的数组, 存放 arr 的子项模板
       - 遇到#loves, 入栈, 建立新的数组, 存放 loves 的子项模板
       - 遇到/loves, 出栈
       - 遇到/arr, 出栈
       - 其他情况, 收集器收集
 - 2 渲染模板, 根据处理好的tokens和data
   - renderTemplate.js


---

end
finished

```json
[
    [
        "text",
        "\n<ul>\n    "
    ],
    [
        "#",
        "arr"
    ],
    [
        "text",
        "\n    <li>\n        <span>"
    ],
    [
        "name",
        "name"
    ],
    [
        "text",
        "</span>\n        <ul>\n            "
    ],
    [
        "#",
        "loves"
    ],
    [
        "text",
        "\n            <li>"
    ],
    [
        "name",
        "."
    ],
    [
        "text",
        "</li>\n            "
    ],
    [
        "/",
        "loves"
    ],
    [
        "text",
        "\n        </ul>\n    </li>\n    "
    ],
    [
        "/",
        "arr"
    ],
    [
        "text",
        "\n</ul>\n"
    ]
]
```

```json
[
    [
        "text",
        "\n<ul>\n  "
    ],
    [
        "#",
        "arr",
        [
            [
                "text",
                "\n  <li>\n    <p>"
            ],
            [
                "name",
                "name"
            ],
            [
                "text",
                "</p>\n    <ul>\n      "
            ],
            [
                "#",
                "loves",
                [
                    [
                        "text",
                        "\n      <li>"
                    ],
                    [
                        "name",
                        "."
                    ],
                    [
                        "text",
                        "</li>\n      "
                    ]
                ]
            ],
            [
                "text",
                "\n    </ul>\n  </li>\n  "
            ]
        ]
    ],
    [
        "text",
        "\n</ul>\n"
    ]
]
```





















