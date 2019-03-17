var fileLines = (value: string, fileName: string): string => {
  var lines = value.split(/\r?\n/).filter(d => d.trim().length > 0)
  var ret = ''
  lines.forEach((line, index) => {
    ret += `echo ${line} ${index === 0 ? '>' : '>>'} ${fileName} ${
      index === lines.length - 1 ? '' : '&& '
    }`
  })
  return ret
}

export { fileLines }
