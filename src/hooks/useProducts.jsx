import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetAllProductByPagination($input: GetAllProductPaginationInput!) {
    getAllProductByPagination(input: $input) {
      _id
      title
      images
      created_at
      description
      is_new
      your_own_shipping_location
      prices {
        original_price
      }
    }
  }
`;

const useProducts = (currentPage, itemsPerPage) => {
  const { error, data, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        page: currentPage,
        limit: itemsPerPage,
      },
    },
  });

  return { error, data, loading };
};

export default useProducts;
