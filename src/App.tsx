import React from "react";
import { Stack, Container, Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

import SearchScreen from "./product/screens/Search";
import ProductScreen from "./product/screens/Product";
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Stack shouldWrapChildren spacing={6}>
      <Header />
      <Container margin="auto" maxWidth={1200} paddingX={6}>
        <Box backgroundColor="white" borderRadius={4} boxShadow="md" padding={6} width="100%">
          <Switch>
            <Route exact component={SearchScreen} path="/" />
            <Route exact component={ProductScreen} path="/:id" />
          </Switch>
        </Box>
      </Container>
    </Stack>
  );
};

export default App;
