/*
修复 web-types.json
 */
import fs from 'fs'

const tagRenameMap = {
  layout: 'CLayout',
  header: 'CHeader',
  aside: 'CAside',
  content: 'CContent',
  footer: 'CFooter',
  BoxCenter: 'CBoxCenter',
  BoxSkin: 'CBoxSkin',
  SingleCenter: 'CSingleCenter',
  Avatar: 'CAvatar',
  FootNav: 'CFootNav',
  Magazine: 'CMagazine',
}

const fixTag = (tag) => {
  if (tag.name in tagRenameMap) {
    tag.name = tagRenameMap[tag.name]
  }
  if (tag.source.module.startsWith('./')) {
    tag.source.module = tag.source.module.replace('./', '')
  }
  if (tag.source.symbol === 'undefined') {
    tag.source.symbol = 'default'
  }
}
const fixWebTypes = (jsonFile) => {
  const rawData = fs.readFileSync(jsonFile)
  const data = JSON.parse(rawData)
  const tags = data.contributions.html.tags
  tags.forEach((tag) => {
    fixTag(tag)
  })

  // write JSON string to a file
  fs.writeFile(jsonFile, JSON.stringify(data, null, '  '), (err) => {
    if (err) {
      throw err
    }
  })
}

fixWebTypes('./web-types.json')
console.log('Fix Done!')
