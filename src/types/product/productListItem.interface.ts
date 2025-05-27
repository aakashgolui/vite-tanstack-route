import { z } from "zod/v4";

export enum CURRENCY {
  USD = "$",
}

export const IProductListItemSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  price: z.number(),
  currencySymbol: z.enum(CURRENCY),
  isInStock: z.boolean(),
  img: z.string(),
  synopsis: z.string(),
  description: z.string(),
});

export type ProductListItem = z.infer<typeof IProductListItemSchema>;
