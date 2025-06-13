"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    !meal.title.trim() ||
    !meal.summary.trim() ||
    !meal.instructions.trim() ||
    !meal.image.trim() ||
    !meal.image.size === 0 ||
    !meal.creator.trim() ||
    !meal.creator_email.trim() ||
    !meal.creator_email.trim().includes("@")
  ) {
    return {
      error: "Invalid input. Please check your form data.",
      status: 400,
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
