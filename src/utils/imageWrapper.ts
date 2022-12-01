export const ImageWrapper = (image: string): string => {
  return `${process.env.REACT_APP_API_URL}/public/${image}`
}
