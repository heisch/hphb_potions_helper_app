import {PotionCard} from "../types/potionCard.ts";
import {Ingredient} from "../types/ingredient.ts";

export const PotionsDeck: PotionCard[] = [
    {
        name: "Aging Potion",
        count: 3,
        desc: ["Choose one:", "Gain 1 {icon_coin}", "or banish this card, then any two Heroes each gain 1 {icon_attack}."],
        ingredients: [Ingredient.bicorn_horn, Ingredient.hellebore]
    },
    {
        name: "Calming Draught",
        count: 3,
        desc: ["Choose one:", "ALL Heroes gain 1 {icon_coin} and 1 {icon_health}", "or banish this card, then remove 1 💀 from the Location."],
        ingredients: [Ingredient.bicorn_horn, Ingredient.lacewing_fly, Ingredient.hellebore]
    },
    {
        name: "Amortentia",
        count: 2,
        desc: ["Choose one:", "Any one Hero gains 3 {icon_health}", "or banish this card, then any two Heroes each gain 2 {icon_coin} and 2 {icon_health}."],
        ingredients: [Ingredient.lacewing_fly, Ingredient.flobber_worm, Ingredient.bicorn_horn]
    },
    {name: "Pepperup Potion", count: 2, desc: [""], ingredients: [Ingredient.mandrake_leaf, Ingredient.bicorn_horn]},
    {
        name: "Mandrake Restorative Draught",
        count: 3,
        desc: ["Choose one:", "Any two Heroes gain 2 {icon_health}", "or banish this card, then ALL Heroes draw a card."],
        ingredients: [Ingredient.mandrake_leaf, Ingredient.lacewing_fly]
    },
    {
        name: "Beguiling Bubbles",
        count: 2,
        desc: ["Choose one:", "Draw a card", "or banish this card to remove 1💀 from the Location."],
        ingredients: [Ingredient.flobber_worm, Ingredient.mandrake_leaf, Ingredient.mandrake_leaf]
    },
    {
        name: "Elixir of Life",
        count: 2,
        desc: ["Choose one:", "Any one Hero gains 2 {icon_health}", "or banish this card, then the next Hero does not reveal Dark Arts events."],
        ingredients: [Ingredient.hellebore, Ingredient.wild]
    },
    {
        name: "Hair-Raising Potion",
        count: 1,
        desc: ["Choose one:", "Gain 2 {icon_coin}", "or banish this card, then add 1 {icon_attack} to each face up Villain."],
        ingredients: [Ingredient.flobber_worm, Ingredient.lacewing_fly]
    },
    {
        name: "Skele-Gro",
        count: 1,
        desc: ["Choose one:", "Gain 1 {icon_attack}", "or banish this, then any one Hero draws 2 cards."],
        ingredients: [Ingredient.hellebore, Ingredient.bicorn_horn]
    },
    {
        name: "Murtlap Essence",
        count: 3,
        desc: ["Choose one:", "Any one Hero gains 2 {icon_health}", "or banish this card, then ALL Heroes gain 2 {icon_health}."],
        ingredients: [Ingredient.hellebore, Ingredient.bicorn_horn]
    },
];
