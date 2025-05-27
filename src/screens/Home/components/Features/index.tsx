import { Grid, Image, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

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
          <Grid.Col key={feature.id} span={4}>
            <motion.div
              className="!p-5 rounded-2xl"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 2px 4px 1px #e6ecf2 ",
                radius: "10px",
              }}
            >
              <Image
                src={feature.img}
                alt={feature.title}
                h="50px"
                w="50px"
                fit="contain"
              />
              <Title order={6} c="neutral-black.2" mt="sm">
                {feature.title}
              </Title>
              <Text c="neutral-black.6" fz="sm" mt="xs">
                {feature.description}
              </Text>
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
