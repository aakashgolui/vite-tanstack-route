import { Flex, Grid } from "@mantine/core";

import type { ProductListItem } from "@/types";

import { CURRENCY } from "@/types";
import { Badge, Container, ProductCard } from "@/ui";

import product1 from "/images/home/products/product-5.png";
import product2 from "/images/home/products/product-6.png";
import product3 from "/images/home/products/product-7.png";
import product4 from "/images/home/products/product-8.png";

export function ProductList() {
  const products: ProductListItem[] = [
    {
      id: "bkjbk",
      name: "Classic Monochrome Tees",
      img: product1,
      price: 49.99,
      currencySymbol: CURRENCY.USD,
      isInStock: true,
      synopsis: "Timeless black and white tees for everyday wear.",
      description:
        "Our Classic Monochrome Tees are crafted with soft, breathable cotton and designed to offer a clean and versatile look. Perfect for layering or wearing solo, these tees bring effortless style to any outfit.",
    },
    {
      id: "7657jhv",
      name: "Monochromatic Wardrobe",
      img: product2,
      price: 39.99,
      currencySymbol: CURRENCY.USD,
      isInStock: true,
      synopsis: "Curated neutral tones for a cohesive wardrobe.",
      description:
        "The Monochromatic Wardrobe collection includes a selection of neutral-hued pieces that are both trendy and timeless. Designed for mix-and-match versatility, it’s the ideal set for minimalist fashion lovers.",
    },
    {
      id: "kbk978687",
      name: "Essential Neutrals",
      img: product3,
      price: 30,
      currencySymbol: CURRENCY.USD,
      isInStock: false,
      synopsis: "Neutral basics for everyday sophistication.",
      description:
        "Essential Neutrals offers the foundational pieces your wardrobe needs. Made with premium fabrics and tailored for comfort, these items ensure you stay stylish and composed from work to weekend. Currently out of stock.",
    },
    {
      id: "kbjk876",
      name: "UTRAANET Black",
      img: product4,
      price: 29.99,
      currencySymbol: CURRENCY.USD,
      isInStock: true,
      synopsis: "Bold, all-black statement wear.",
      description:
        "UTRAANET Black redefines classic black with a sleek and modern twist. This premium piece is perfect for those who want to make a confident impression while keeping their look understated and cool.",
    },
  ];

  return (
    <Container className="!py-[50px]">
      <Flex mb="xl" justify="center" align="center" gap="sm">
        <Badge
          variant="outline"
          p="sm"
          c="neutral-black.2"
          className="!border-neutral-white-200"
        >
          Featured
        </Badge>
        <Badge
          variant="transparent"
          p="sm"
          c="neutral-black.2"
        >
          Latest
        </Badge>
      </Flex>
      <Grid>
        {products.map(product => (
          <Grid.Col
            key={product.id}
            span={3}
            p="xl"
            className={`${product.isInStock ? "opacity-100 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}
          >
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
