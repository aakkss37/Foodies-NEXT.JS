'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
    return !text || text.trim() === ""
}
export const shareMeal = async (prevState, formData) => {
    const meal = {
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
    }

    // Validate form
    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        !meal.image.size > 0
    ) {
        return {
            message: "Invalid Input"
        }
    }
    await saveMeal(meal);
    // revalidatePath allows you to revalidate/(rerender) data associated with a specific path.
    // Because next.js always do some caching and will never render the redirected page even if something gow updated.
    revalidatePath('/meals', "page")
    redirect('/meals')

}