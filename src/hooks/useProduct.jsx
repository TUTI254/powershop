import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query GetProductById($input: GetProductByIdInput!) {
    getProductById(input: $input) {
      title
      description
      images
      prices {
        original_price
      }
    }
  }
`;

const useProduct = (pid) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { input: { pid } },
  });
  return { loading, error, data };
};

export default useProduct;
