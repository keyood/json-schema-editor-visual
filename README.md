# json-schema-editor-visual
A json-schema editor of high efficient and easy-to-use, base on React.

![avatar](json-schema-editor-visual.jpg)

## Usage
```
npm install json-schema-editor-visual
```

```js
const option = {}
import 'antd/dist/antd.css'
require('json-schema-editor-visual/dist/main.css')
const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const SchemaEditor = schemaEditor(option)

render(
    <SchemaEditor />,
  document.getElementById('root')
)
```

## Option Object

| name | desc | default |
| ---- | ----------- | --------- |
| `lg` | language, support `en_US` or `zh_CN` | en_US 

## SchemaEditor Props

| name | type | default | desc
| ---- | ----------- | --------- | --------- |
| `data` | string | null | the data of editor
| `checkedTip`| string | null |checkbox 自定义提示 |
| `radio`| boolean | false | checkbox 单选功能 |
| `readOnly`| boolean | false |不能添加删除表单项，不能修改key, 但是支持输入value | 
| `noDescription`| boolean | false |没有描述 |
| `onChange`| function | null | |
| `showEditor` | boolean | false | 显示schema的编辑框 |
