import { z } from "zod";
import { categoryNameValid } from "./validation";

export const CategoryValidSchema = z.object({
    categoryType: categoryNameValid
})