import { Box, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

import { Badge, Container } from "@/ui";

import product1 from "/images/home/products/product-1.png";
import product2 from "/images/home/products/product-2.png";
import product3 from "/images/home/products/product-3.png";
import product4 from "/images/home/products/product-4.png";

export function BestSelling() {
  const products = [
    {
      id: 1,
      name: "Classic Monochrome Tees",
      img: product1,
      price: 49.99,
      currencySymbol: "$",
      isInStock: true,
    },
    {
      id: 2,
      name: "Monochromatic Wardrobe",
      img: product2,
      price: 39.99,
      currencySymbol: "$",
      isInStock: true,
    },
    {
      id: 3,
      name: "Essential Neutrals",
      img: product3,
      price: 30,
      currencySymbol: "$",
      isInStock: false,
    },
    {
      id: 4,
      name: "UTRAANET Black",
      img: product4,
      price: 29.99,
      currencySymbol: "$",
      isInStock: true,
    },
  ];

  return (
    <Container className="!py-[50px]">
      <Title order={4} className="text-center" mb="xl" c="neutral-black.2">
        Best Selling
      </Title>
      <Grid>
        {products.map(product => (
          <Grid.Col
            key={product.id}
            span={3}
            p="xl"
            className={`${product.isInStock ? "opacity-100 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}
          >
            <Stack gap="md">
              <Box className="h-[312px] bg-neutral-white-100">
                <Image
                  src={product.img}
                  alt={product.name}
                  fit="contain"
                  w="100%"
                  h="100%"
                />
              </Box>

              <Title order={6} c="neutral-black.2">
                {product.name}
              </Title>

              <Group>
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
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
