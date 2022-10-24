let baseline = 100000

export function genId(prefix = '') {
  const id = prefix + Date.now().toString(36).slice(4) + baseline.toString(36)
  baseline++
  return id
}
