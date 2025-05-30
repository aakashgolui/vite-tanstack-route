import { ActionIcon, Flex, Group, Image, Text } from "@mantine/core";
import {
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

import { Container, TextInput } from "@/ui";

import fullLogo from "/images/logos/logo-full.png";

export function Header() {
  return (
    <header>
      <Flex
        h="40px"
        justify="center"
        align="center"
        gap="md"
        className="bg-neutral-black-50 text-neutral-white-50"
      >
        <Text>Get 25% OFF on your first order</Text>
        <Link to="/" className="capitalize font-bold">
          Order now
        </Link>
      </Flex>
      <Container h={{ base: "30px", md: "84px" }}>
        <nav className="flex h-[100%] items-center justify-between bg-neutral-white-50">
          <Image
            src={fullLogo}
            alt="main logo"
            fit="contain"
            className="!w-[150px]"
          />
          <Group className="text-neutral-black-500 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Group>
          <Group gap="xs">
            <TextInput
              placeholder="Search products"
              leftSection={<IconSearch size={16} />}
              fw="bold"
            />
            <ActionIcon
              variant="white"
              size="xl"
              c="neutral-black.5"
              radius="xl"
            >
              <IconShoppingCart size={30} />
            </ActionIcon>
            <ActionIcon
              variant="white"
              size="xl"
              c="neutral-black.5"
              radius="xl"
            >
              <IconUserCircle size={35} />
            </ActionIcon>
          </Group>
        </nav>
      </Container>
    </header>
  );
}
