import type { FC } from "react";

import { Box, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion"; // use framer-motion, not motion/react
import { useState } from "react";

import type { ProductListItem } from "@/types";

import { Badge } from "@/ui";

export const ProductCard: FC<{ product: ProductListItem }> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Normal card view */}
            <motion.div
                className="flex-col cursor-pointer"
                whileHover={{ scale: 1.05, rotate: "1deg" }}
                onClick={() => setIsOpen(true)}
            >
                <Box className="h-[312px] bg-neutral-white-100">
                    <motion.img
                        src={product.img}
                        alt={product.name}
                        style={{ objectFit: "contain" }}
                        whileHover={{ scale: 1.09 }}
                        width="100%"
                        height="100%"
                    />
                </Box>

                <Title order={6} c="neutral-black.2" mt="md">
                    {product.name}
                </Title>

                <Group mt="xs">
                    <Badge
                        variant="outline"
                        p="sm"
                        c="neutral-black.2"
                        className="!border-neutral-black-200"
                    >
                        {product.isInStock ? "In Stock" : "sold out"}
                    </Badge>

                    <Text c="neutral-black.6" fz="sm">
                        {product.currencySymbol}
                        {product.price}
                    </Text>
                </Group>
            </motion.div>

            {/* Popup modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="flex p-6 rounded justify-center items-center gap-10"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={e => e.stopPropagation()} // Prevent close on modal click
                        >
                            <Flex direction="column">

                                <Box className="h-[312px] bg-neutral-white-100">
                                    <motion.img
                                        src={product.img}
                                        alt={product.name}
                                        whileHover={{ scale: 1.1 }}
                                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                    />
                                </Box>

                                <Title order={4} mt="md" c="neutral-white.2">
                                    {product.name}
                                </Title>

                                <Group mt="xs">
                                    <Badge
                                        variant="outline"
                                        p="sm"
                                        className="!border-neutral-white-200"
                                        c="neutral-white.2"
                                    >
                                        {product.isInStock ? "In Stock" : "sold out"}
                                    </Badge>

                                    <Text c="neutral-white.2" fz="sm">
                                        {product.currencySymbol}
                                        {product.price}
                                    </Text>
                                </Group>
                            </Flex>
                            <Stack w="30%">
                                <Text c="neutral-white.2" fz="xl" mt="md">
                                    {product.synopsis}
                                </Text>
                                <Text c="neutral-white.2" fz="sm">
                                    {product.description}
                                </Text>
                            </Stack>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
