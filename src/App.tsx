import './App.scss'
import {Ingredient} from "./types/ingredient.ts";
import {getEnumKeyByEnumValue, getRandomArrayElement, getRandomArrayKey, replaceIconStrings} from "./helpers";
import {PotionBoards} from "./data/potionsBoards.ts";
import React, {useEffect, useState} from "react";


const initialPool: Ingredient[] = [
    Ingredient.bicorn_horn,
    Ingredient.bicorn_horn,
    Ingredient.bicorn_horn,
    Ingredient.bicorn_horn,
    Ingredient.flobber_worm,
    Ingredient.flobber_worm,
    Ingredient.flobber_worm,
    Ingredient.flobber_worm,
    Ingredient.hellebore,
    Ingredient.hellebore,
    Ingredient.hellebore,
    Ingredient.hellebore,
    Ingredient.lacewing_fly,
    Ingredient.lacewing_fly,
    Ingredient.lacewing_fly,
    Ingredient.lacewing_fly,
    Ingredient.mandrake_leaf,
    Ingredient.mandrake_leaf,
    Ingredient.mandrake_leaf,
    Ingredient.mandrake_leaf,
    Ingredient.wild,
    Ingredient.wild,
    Ingredient.wild,
    Ingredient.wild,
];

// todo: add ui to select board
const board = getRandomArrayElement(PotionBoards);

const toggleRow = (index: number, rowsToggled: boolean[], setRowsToggled: React.Dispatch<React.SetStateAction<boolean[]>>) => {
    rowsToggled[index] = !rowsToggled[index];
    setRowsToggled([...rowsToggled]);
}

const collectRow = (
    index: number,
    rowsCollected: boolean[],
    available: (Ingredient | undefined)[],
    setAvailable: React.Dispatch<React.SetStateAction<(Ingredient | undefined)[]>>,
    collected: Ingredient[],
    setCollected: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    setRowsCollected: React.Dispatch<React.SetStateAction<boolean[]>>,
) => {
    if (rowsCollected[index]) {
        return;
    }
    const item = available.splice(index, 1, undefined);
    if (item.length && item[0]) {
        setCollected([...collected, item[0]].sort());
    }
    setAvailable([...available]);
    rowsCollected[index] = true;
    setRowsCollected([...rowsCollected]);
}

function App() {

    const [pool, setPool] = useState<Array<Ingredient>>(initialPool.sort());


    const [availableLeft, setAvailableLeft] = useState<Array<Ingredient|undefined>>([]);
    const [availableRight, setAvailableRight] = useState<Array<Ingredient|undefined>>([]);

    const [collected, setCollected] = useState<Array<Ingredient>>([]);

    const [rowsToggled, setRowsToggled] = useState([false, false, false, false, false]);
    const [rowsCollected, setRowsCollected] = useState([false, false, false, false, false]);

    const newRound = () => {
        const newLeft = availableLeft.filter(a => !!a);
        const newRight = availableRight.filter(a => !!a);
        const tempPool = [...pool];
        for (let i = newLeft.length;i<5;i++) {
            const randomKey = getRandomArrayKey(tempPool);
            const item = tempPool.splice(randomKey, 1)[0];
            newLeft.unshift(item);
        }
        for (let i = newRight.length;i<5;i++) {
            const randomKey = getRandomArrayKey(tempPool);
            const item = tempPool.splice(randomKey, 1)[0];
            newRight.unshift(item);
        }
        setAvailableLeft([...newLeft]);
        setAvailableRight([...newRight]);
        setPool([...tempPool]);
        setRowsToggled([false, false, false, false, false]);
        setRowsCollected([false, false, false, false, false]);
    };

    useEffect(() => {
        newRound();
    }, []);

    return (
        <div className={'board'}>
            <div className={'board-pool'}>
                {pool.map((ingredient, index) =>
                    <img alt={ingredient} className={'board-image'} key={index}
                         src={'ingredients/' + getEnumKeyByEnumValue(Ingredient, ingredient) + '.png'}
                         onClick={() => {
                             const item = pool.splice(index, 1)[0];
                             setPool([...pool]);
                             setCollected([...collected, item].sort());
                         }}
                    />
                )}
            </div>
            {board.rows.map((text, index) => {
                const ingredient_left = availableLeft[index];
                const ingredient_right = availableRight[index];
                return (
                    <React.Fragment key={index}>
                        <div
                            className={'board-task-row-1 ' + ((rowsCollected[index] || rowsToggled[index]) ? 'board-task-collected' : '')}
                            onClick={() => toggleRow(index, rowsToggled, setRowsToggled)}>
                            {replaceIconStrings(text)}
                        </div>
                        <div className={'board-task-row-2 ' + (rowsCollected[index] ? 'board-task-collected' : '')}>
                            {ingredient_left &&
                                <img alt={ingredient_left} className={'board-image'} key={index}
                                     src={'ingredients/' + getEnumKeyByEnumValue(Ingredient, ingredient_left) + '.png'}
                                     onClick={() => collectRow(index, rowsCollected, availableLeft, setAvailableLeft, collected, setCollected, setRowsCollected)}
                                />}
                            {!ingredient_left && rowsCollected[index] && <>✔︎</>}
                        </div>
                        <div className={'board-task-row-3 ' + (rowsCollected[index] ? 'board-task-collected' : '')}>
                            {ingredient_right &&
                                <img alt={ingredient_right} className={'board-image'} key={index}
                                     src={'ingredients/' + getEnumKeyByEnumValue(Ingredient, ingredient_right) + '.png'}
                                     onClick={() => collectRow(index, rowsCollected, availableRight, setAvailableRight, collected, setCollected, setRowsCollected)}
                            />}
                            {!ingredient_right && rowsCollected[index] && <>✔︎</>}
                        </div>
                    </React.Fragment>
                )
            })}
            <div className={'board-action'}>
                <button type="button" onClick={newRound}>Neue Runde</button>
            </div>
            <div className={'board-collected'}>
                {collected.map((ingredient, index) =>
                    <img alt={ingredient} className={'board-image'} key={index}
                         src={'ingredients/' + getEnumKeyByEnumValue(Ingredient, ingredient) + '.png'}
                         onClick={() => {
                             const item = collected.splice(index, 1)[0];
                             setCollected([...collected]);
                             setPool([...pool, item].sort());
                         }}
                    />
                )}
            </div>
        </div>
    )
}

export default App
