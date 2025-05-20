import { Grid, Image, Stack, Text, Title } from "@mantine/core";

import { Container } from "@/ui";

import freeShipping from "/images/home/freeShipping.png";
import satisfactionGuarantee from "/images/home/satisfactionGuarantee.png";
import securePayment from "/images/home/securePayment.png";

export function Features() {
  const features = [
    {
      id: 1,
      img: freeShipping,
      title: "Free Shipping",
      description:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      id: 2,
      img: satisfactionGuarantee,
      title: "Satisfaction Guarantee",
      description:
        "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
      id: 3,
      img: securePayment,
      title: "Secure Payment",
      description:
        "Your security is our priority. Your payments are secure with us.",
    },
  ];
  return (
    <Container className="!py-[50px]">
      <Grid>
        {features.map(feature => (
          <Grid.Col key={feature.id} span={4} p="xl">
            <Stack gap="md">
              <Image
                src={feature.img}
                alt={feature.title}
                h="50px"
                w="50px"
                fit="contain"
              />
              <Title order={6} c="neutral-black.2">
                {feature.title}
              </Title>
              <Text c="neutral-black.6" fz="sm">
                {feature.description}
              </Text>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
