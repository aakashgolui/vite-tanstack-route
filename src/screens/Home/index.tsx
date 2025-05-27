import { Title, VisuallyHidden } from "@mantine/core";

import { BestSelling, BrowserYourFashion, Features, HeroBanner } from "./components";

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
    </>
  );
}
