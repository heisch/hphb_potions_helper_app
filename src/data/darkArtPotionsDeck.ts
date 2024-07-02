import {PotionCard} from "../types/potionCard.ts";
import {Ingredient} from "../types/ingredient.ts";

export const DarkArtPotionsDeck: PotionCard[] = [
    {
        name: "Draught of Living Death",
        count: 1,
        desc: "You and your neighbours each banish the top card of your decks. Add a 💀 to the Location",
        ingredients: [Ingredient.wild, Ingredient.flobber_worm, Ingredient.lacewing_fly, Ingredient.bicorn_horn]
    },
    {
        name: "Flesh-Eating Slug Repellent",
        count: 2,
        desc: "If you have an Ally in hand, ALL Heroes lose 2 {icon_health}",
        ingredients: [Ingredient.flobber_worm, Ingredient.mandrake_leaf, Ingredient.bicorn_horn]
    },
    {
        name: "Garroting Gas",
        count: 2,
        desc: "All Heroes lose 1 {icon_health}.",
        ingredients: [Ingredient.mandrake_leaf, Ingredient.hellebore, Ingredient.lacewing_fly]
    },
    {
        name: "Memory Potion",
        count: 1,
        desc: "If there are two or more Spells available to acquire, discard a card.",
        ingredients: [Ingredient.lacewing_fly, Ingredient.hellebore, Ingredient.bicorn_horn, Ingredient.mandrake_leaf]
    },
    {
        name: "Truth Potion",
        count: 2,
        desc: "If there is an Ally available to acquire, reveal an additional Dark Arts event.",
        ingredients: [Ingredient.wild, Ingredient.hellebore, Ingredient.mandrake_leaf]
    },
    {
        name: "Babbling Beverage",
        count: 2,
        desc: "If there is another Dark Arts Potion face up, you can only play 3 Spells.",
        ingredients: [Ingredient.mandrake_leaf, Ingredient.hellebore, Ingredient.hellebore]
    },
    {
        name: "Forgetfulness Potion",
        count: 2,
        desc: "Discard a card. Reveal an additional Dark Arts event.",
        ingredients: [Ingredient.lacewing_fly, Ingredient.flobber_worm, Ingredient.hellebore]
    },
    {
        name: "Sleeping Draught",
        count: 1,
        desc: "Choose one: Any one Hero discards an Ally; or remove 1 {icon_attack} from ALL Villains.",
        ingredients: [Ingredient.flobber_worm, Ingredient.mandrake_leaf, Ingredient.bicorn_horn]
    },
    {
        name: "Confusing Concoction",
        count: 2,
        desc: "{icon_health}is {icon_coin} and {icon_coin} is {icon_health} on all Hogwarts cards.",
        ingredients: [Ingredient.flobber_worm, Ingredient.bicorn_horn, Ingredient.mandrake_leaf]
    },
];
