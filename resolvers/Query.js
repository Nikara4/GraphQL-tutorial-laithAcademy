export const Query = {
  products: (parent, { filter }, { data }) => {
    let filteredProducts = data.products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          data.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = Math.ceil(sumRating / numberOfReviews);
          console.log(avgProductRating);
          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { id }, { data }) => {
    return data.products.find((prod) => prod.id === id);
  },
  categories: (parent, args, { data }) => data.categories,
  category: (parent, { id }, { data }) => {
    return data.categories.find((category) => category.id === id);
  },
};
