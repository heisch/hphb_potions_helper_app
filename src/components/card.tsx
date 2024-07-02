import {Card} from "../types/card.ts";
import {PotionCard} from "../types/potionCard.ts";
import {PotionIngredientsComponent} from "./potionIngredientsComponent.tsx";

interface CardComponentProps {
    card: Card | PotionCard
}

const CardDescComponent = ({card}: CardComponentProps) => {
    if (typeof card.desc === 'string') {
        return <div className={'card-desc'}>{card.desc}</div>
    }
    return (
        <div className={'card-desc'}>
            {card.desc.map((desc, index) => <div key={index}>{desc}</div>)}
        </div>
    );
}

export const CardComponent = ({card}: CardComponentProps) => {
    if (card)
        return (
            <div className={'card'}>
                <div className={'card-name'}>{card.name}</div>
                <CardDescComponent card={card}/>
                {"ingredients" in card && <PotionIngredientsComponent card={card}/>}
            </div>
        );
}
