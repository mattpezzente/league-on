export const normalizeText = function(text) {
  let newText = text
  for(let i = 0; i < newText.length; i++) {
    if (i == 1 && newText.charAt(i) !== newText.charAt(i).toUpperCase()) {
      newText = newText.slice(0,1).toUpperCase() + newText.slice(1, newText.length)
    }
    if (i > 1 && newText.charAt(i) == newText.charAt(i).toUpperCase()) {
      newText = newText.slice(0, i) + ' ' + newText.slice(i)
      i++
    }
  }
  return newText
}