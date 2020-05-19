/**
 * Convert object styles to Tailwind classes
 * @param {Object} style - Contain default component styles
 * @returns {String} - Tailwind compatible classes
 */
export default function makeClasses(style) {
  return Object.keys(style)
    .reduce((arr, s) => {
      return arr.concat(
        style[s].split(' ').map((i) => {
          let cls
          switch (s) {
            case 'hover':
            case 'focus':
              cls = `${s}:${i}`
              break
            default:
              cls = `${s}-${i}`
          }
          return cls
        })
      )
    }, [])
    .join(' ')
}
