'use server';

import { saveMeal } from "./meals";

export async function handleSubmit(formData) {
    "use server";
    
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
    await saveMeal(meal);
    console.log("Meal submitted:", meal);
  }