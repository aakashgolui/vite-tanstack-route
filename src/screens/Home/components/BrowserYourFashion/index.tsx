import type { FC } from "react";

import { Box, Button, Flex, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";

import { Container } from "@/ui";

import browseYourFashion from "/images/home/browseYourFashion.png";

export const BrowserYourFashion: FC = () => {
    return (
        <Flex className="bg-neutral-white-100">
            <Container w="100%">
                <Flex justify="space-between">
                    <Stack justify="center">
                        <Title order={4} c="neutral-black.2">Browse Our Fashion Paradise!</Title>
                        <Text c="neutral-black.6" className="!text-sm">
                            Step into a world of style and explore our diverse collection of
                            <br />
                            clothing categories.
                        </Text>
                        <Button mt="lg" rightSection={<IconArrowRight size={17} />} bg="neutral-black.1" w="50%">
                            Start Browsing
                        </Button>
                    </Stack>
                    <Box>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            src={browseYourFashion}
                            alt="Browser-Your-Fashion"
                        />
                    </Box>
                </Flex>
            </Container>
        </Flex>
    );
};
