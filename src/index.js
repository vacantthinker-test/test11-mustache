import {render} from "mustache";

const template = `
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
`

const data = {
	arr: [
		{name: 'Z', loves: ['work']},
		{name: 'L', loves: ['read', 'walk']},
		{name: 'K', loves: ['game', 'punch']},
	]
}

document.getElementById('app').innerHTML = render(template, data)
// console.log('test11')
