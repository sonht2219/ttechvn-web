import isArray from 'lodash/isArray'
export const flattenChildren = (parent) => {
  const childrens = parent?.children
  const result = []
  if (isArray(childrens)) {
    childrens.forEach((child) => {
      result.push(child)
      flattenChildren(child.children)
    })
  }
  return result
}
