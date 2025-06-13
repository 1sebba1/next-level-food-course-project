import fs from "fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for demonstration purposes
  // throw new Error('Database connection failed'); // Simulate an error for demonstration purposes
  return db.prepare("SeLECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.error("Error writing image to file:", error);
      throw new Error("Failed to save image");
    }
    console.log("Image saved successfully:", filename);
  });

  meal.image = `/images/${filename}`;

  const stmt = db.prepare(`
    INSERT INTO meals 
      (slug, title, summary, instructions, image, creator, creator_email)
    VALUES ( 
      @slug,
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email
    )
  `);

  stmt.run(meal);
}
