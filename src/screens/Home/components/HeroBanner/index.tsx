import type { FC } from "react";

import { Button, Flex, Image, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import { Container } from "@/ui";

import heroBannerImage from "/images/home/hero-banner.png";

export const HeroBanner: FC = () => {
  return (
    <Flex className="bg-neutral-white-100">
      <Container className="h-[540px] !pt-[140px] w-full flex justify-between">
        <Flex direction="column" gap="sm" className="h-full justify-center">
          <Title order={3} c="neutral-black.2">
            Fresh Arrivals Online
          </Title>
          <Text c="neutral-black.6" className="!text-sm">
            Discover Our Newest Collection Today.
          </Text>
          <Button
            mt="lg"
            rightSection={<IconArrowRight size={17} />}
            bg="neutral-black.1"
            w="70%"
          >
            View Collection
          </Button>
        </Flex>
        <Flex justify="flex-end" align="flex-end">
          <Image src={heroBannerImage} alt="hero banner image" />
        </Flex>
      </Container>
    </Flex>
  );
};
