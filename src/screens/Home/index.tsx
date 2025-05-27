import { Title, VisuallyHidden } from "@mantine/core";

import { BestSelling, BrowserYourFashion, Features, HeroBanner, ProductList } from "./components";

export function HomeScreen() {
  return (
    <>
      <VisuallyHidden>
        <Title order={1}>Home page</Title>
      </VisuallyHidden>
      <HeroBanner />
      <Features />
      <BestSelling />
      <BrowserYourFashion />
      <ProductList />
    </>
  );
}
