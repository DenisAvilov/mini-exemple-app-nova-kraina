export const range = (count: number, max: number) => {
  if (max === count) {
    return 0
  } else if ( count < max) {
    return count = max - count
  } else {
    return 0
  }
}
