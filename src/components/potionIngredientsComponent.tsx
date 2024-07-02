import {PotionCard} from "../types/potionCard.ts";
import {getEnumKeyByEnumValue} from "../helpers";
import {Ingredient} from "../types/ingredient.ts";

interface PotionIngredientsComponentProps {
    card: PotionCard
}

export const PotionIngredientsComponent = ({card}: PotionIngredientsComponentProps) => {
    return (
        card.ingredients.map((ingredient, index) => (
            <img alt={ingredient} className={'card-image'} key={index}
                 src={'ingredients/' + getEnumKeyByEnumValue(Ingredient, ingredient) + '.png'}/>
        ))
    );
}
