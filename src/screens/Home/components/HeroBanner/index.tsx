import type { FC } from "react";

import { Button, Flex, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";

import { Container } from "@/ui";

import heroBannerImage from "/images/home/hero-banner.png";

export const HeroBanner: FC = () => {
  return (
    <Flex className="bg-neutral-white-100">
      <Container className="h-[540px] !pt-[140px] w-full flex justify-between">
        <motion.div
          initial={{ opacity: 0.5, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="flex flex-col justify-center"
        >
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
        </motion.div>
        <Flex justify="flex-end" align="flex-end">
          <motion.img
            initial={{ scale: 0.8, y: 100, opacity: 0.5 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
            src={heroBannerImage}
            alt="hero banner image"
          />
        </Flex>
      </Container>
    </Flex>
  );
};
