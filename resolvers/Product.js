export const Product = {
  category: ({ categoryId }, args, { data }) => {
    return data.categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { data }) => {
    return data.reviews.filter((review) => review.productId === id);
  },
};
