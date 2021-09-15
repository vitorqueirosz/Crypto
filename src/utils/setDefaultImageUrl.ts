export const setDefaultImageUrl = (image: string) => {
  return `${process.env.NEXT_PUBLIC_URL}${image}`;
};
