import {Card} from "./card.ts";
import {Ingredient} from "./ingredient.ts";

export interface PotionCard extends Card {
    ingredients: Ingredient[]
}
