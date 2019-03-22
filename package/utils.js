export const JSONPATH_JOIN_CHAR = '.';
export const lang = 'en_US';
export const format = [
  { name: 'date-time' },
  { name: 'date' },
  { name: 'email' },
  { name: 'hostname' },
  { name: 'ipv4' },
  { name: 'ipv6' },
  { name: 'uri' }
];
export const SCHEMA_TYPE = ['string', 'number', 'array', 'object', 'boolean', 'integer'];
export const defaultSchema = {
  string: {
    type: 'string'
  },
  number: {
    type: 'number'
  },
  array: {
    type: 'array',
    items: {
      type: 'string'
    }
  },
  object: {
    type: 'object',
    properties: {}
  },
  boolean: {
    type: 'boolean'
  },
  integer: {
    type: 'integer'
  }
};

// 防抖函数，减少高频触发的函数执行的频率
// 请在 constructor 里使用:

// this.func = debounce(this.func, 400);
export function debounce (func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

export function getData(state, keys) {
  let curState = state;
  for (let i = 0; i < keys.length; i++) {
    curState = curState[keys[i]];
  }
  return curState;
}

export function setData (state, keys, value) {
  let curState = state;
  for (let i = 0; i < keys.length - 1; i++) {
    curState = curState[keys[i]];
  }
  curState[keys[keys.length - 1]] = value;
};

export function deleteData (state, keys) {
  let curState = state;
  for (let i = 0; i < keys.length - 1; i++) {
    curState = curState[keys[i]];
  }

  delete curState[keys[keys.length - 1]];
};

export function getParentKeys (keys) {
  if (keys.length === 1) return [];
  let arr = [].concat(keys);
  arr.splice(keys.length - 1, 1);
  return arr;
};

export function clearSomeFields (keys, data) {
  const newData = Object.assign({}, data);
  keys.forEach(key => {
    delete newData[key];
  });
  return newData;
};

export function getFieldstitle(data) {
  const requiredtitle = [];
  Object.keys(data).map(title => {
    requiredtitle.push(title);
  });

  return requiredtitle;
}

export function handleSchemaRequired(schema, checked) {
  // console.log(schema)
  if (schema.type === 'object') {
    let requiredtitle = getFieldstitle(schema.properties);

    // schema.required = checked ? [].concat(requiredtitle) : [];
    if (checked) {
      schema.required = [].concat(requiredtitle);
    } else {
      delete schema.required;
    }

    handleObject(schema.properties, checked);
  } else if (schema.type === 'array') {
    handleSchemaRequired(schema.items, checked);
  } else {
    return schema;
  }
}

export function handleObject(properties, checked) {
  for (var key in properties) {
    if (properties[key].type === 'array' || properties[key].type === 'object')
      handleSchemaRequired(properties[key], checked);
  }
}

export function cloneObject(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var newArr = [];
      obj.forEach(function(item, index) {
        newArr[index] = cloneObject(item);
      });
      return newArr;
    } else {
      var newObj = {};
      for (var key in obj) {
        newObj[key] = cloneObject(obj[key]);
      }
      return newObj;
    }
  } else {
    return obj;
  }
}

export function formLayout (isMock, noDescription, readOnly) {
  // 全部都有
  let layout = {
    name: 10, // name
    type: 3, // 类型
    mock: 4, // 描述
    description: 4, // 描述
    setting: 3 // 操作
  }

  // 无mock
  if (!isMock && !noDescription && !readOnly) {
    layout = {
      name: 12,
      type: 3,
      mock: 0,
      description: 6,
      setting: 3
    }
  }

  // 无操作
  if (isMock && !noDescription && readOnly) {
    layout = {
      name: 11,
      type: 3,
      mock: 5,
      description: 5,
      setting: 0
    }
  }
  // 无描述
  if (isMock && noDescription && !readOnly) {
    layout = {
      name: 12,
      type: 3,
      mock: 6,
      description: 0,
      setting: 3
    }
  }
  // 无mock，无操作
  if (!isMock && !noDescription && readOnly) {
    layout = {
      name: 12,
      type: 3,
      mock: 0,
      description: 9,
      setting: 0
    }
  }

  // 无描述，无操作
  if (isMock && noDescription && readOnly) {
    layout = {
      name: 12,
      type: 3,
      mock: 9,
      description: 0,
      setting: 0
    }
  }

  // 无描述，无mock
  if (!isMock && noDescription && !readOnly) {
    layout = {
      name: 13,
      type: 8,
      mock: 0,
      description: 0,
      setting: 3
    }
  }

  // 无mock 无描述，无操作
  if (!isMock && noDescription && readOnly) {
    layout = {
      name: 18,
      type: 6,
      mock: 0,
      description: 0,
      setting: 0
    }
  }
  return layout
}
