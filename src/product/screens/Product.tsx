import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Stack, Text, Image, Divider } from "@chakra-ui/react";

import Button from "../../components/Button";
import { Product } from "../types";

// se realiza reuest con gql
const PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      title
      image
      price
      description
    }
  }
`;

interface Query {
  product: Product;
}

interface Variables {
  id: string | null;
}

const ProductScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<Query, Variables>(PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No results found</p>;

  const price = data.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" }).split(".");

  return (
    <Stack divider={<Divider />} spacing={6}>
      <Stack direction="row" spacing={12}>
        <Image
          boxSize={320}
          margin="auto"
          minWidth={320}
          objectFit="contain"
          src={data.product.image}
        />
        <Stack width="30%">
          <Text fontSize="xl" fontWeight="500">
            {data.product.title}
          </Text>
          <Stack direction="row" justifyContent="center">
            <Text marginBottom="5" marginTop="-10px" alignSelf="center" fontSize="40px">
              {price[0]}
            </Text>
            <Text fontSize="20px">
              {price[1]}
            </Text>
          </Stack>
          <Stack alignItems="center">
            <Button
              border="none"
              color="#3681F9"
              colorText="white"
              height="50px"
              radius="5%"
              text="Comprar"
              width="80%"
              onClick={() => console.log("You clicked")}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="40px" marginBottom="20px">
          Descripcion del producto
        </Text>
        <Text>{data.product.description}</Text>
      </Stack>
    </Stack>
  );
};

export default ProductScreen;
