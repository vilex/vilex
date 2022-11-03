class ShortId {
  private _baseline = 10000
  private _prefix = ''
  constructor(prefix = 'a') {
    this._prefix = prefix
  }

  get value() {
    return (
      this._prefix +
      Date.now().toString(36).slice(4) +
      (this._baseline++).toString(36)
    )
  }
}

export function sid(prefix?: string) {
  return new ShortId(prefix)
}
