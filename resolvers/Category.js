export const Category = {
  products: ({ id }, {filter}, { data }) => {
    let categoryProducts = data.products.filter(
      (products) => products.categoryId === id
    );

    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      const {onSale, avgRating } = filter;
      if (onSale === true) {filteredCategoryProducts = filteredCategoryProducts.filter((product) => product.onSale);}
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
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

    return filteredCategoryProducts;
  },
};
