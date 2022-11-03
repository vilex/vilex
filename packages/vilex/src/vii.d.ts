declare interface Function {
  list: <T>(sources: T[], iterator: (item: T, index: number) => void) => void
}
