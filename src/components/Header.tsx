import React from "react";
import { Input, Stack, Image, Container, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import logo from "../assets/logo.png";


interface Form extends HTMLDivElement {
  query: HTMLInputElement;
}

const Header: React.FC = () => {
  const history = useHistory();

  function onSearch(event: React.ChangeEvent<Form>) {
    event.preventDefault();

    history.push(`/?query=${event.target.query.value}`);
  }

  return (
    <Stack shouldWrapChildren spacing={6}>
      <Box backgroundColor="primary.400" boxShadow="sm">
        <Container maxWidth={1200} paddingX={6} paddingY={4}>
          <Stack as="form" direction="row" spacing={6} onSubmit={onSearch}>
            <Image src={logo} />
            <Input backgroundColor="white" maxWidth="90%" name="query" />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default Header;