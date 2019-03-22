import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'

// if (process.env.NODE_ENV !== 'production') {
//   window.Perf = require('react-addons-perf')
// }
// import '../dist/main.css'
const jeditor = require('../package/index.js')
// const jeditor = require('../dist/main.js')
const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' }
];

const JEditor = jeditor({mock: mock, lang: 'zh_CN'})
const data = '{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","required":["result_code"],"properties":{"result_message":{"type":"string","properties":{}},"data":{"type":"string","properties":{}},"result_code":{"type":"integer","properties":{}}}}'
render(
  <div>
    <h2>Example:</h2>
    <hr />
    <JEditor
      showEditor
      isMock
      // radio
      // readOnly
      // noDescription
      data={data}
      onChange={e => {
        console.log('changeValue', e)
      }}
    />
  </div>,
  document.getElementById('root')
);
