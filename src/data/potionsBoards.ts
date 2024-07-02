import {PotionBoard} from "../types/potionBoard.ts";

// todo: add localization
export const PotionBoards: PotionBoard[] = [
    {
        source: 'Box 2',
        side: 'A',
        rows: [
            "Ein Held wurde betäubt.",
            "Du hast einen anderen Helden geheilt.",
            "Du hast 3 oder mehr {icon_attack} abgelegt.",
            "Du hast 5 oder mehr {icon_coin} bekommen.",
            "Du hast 3 Sprüche ausgespielt.",
        ]
    },
    {
        source: 'Box 2',
        side: 'B',
        rows: [
            "Du hast eine Karte für 4 oder mehr {icon_coin} erworben.",
            "Du hast 2 Gegenstände ausgespielt.",
            "Du hast eine Karte abgeworfen.",
            "Ein Held hat 3 oder mehr {icon_health} bekommen.",
            "Du hast 2 oder mehr Dunkle-Künste-Karten aufgedeckt.",
        ]
    },
    {
        source: 'Box 3',
        side: 'A',
        rows: [
            "Ein held hat 10 {icon_health}.",
            "Du hast einen Bösewicht besiegt.",
            "Du hast eine zusätzliche Karte gezogen.",
            "Du hast deine Zauber-Fähigkeit eingesetzt.",
            "Es liegt ein Verbündeter bei den Hogwarts-Karten aus.",
        ]
    },
    {
        source: 'Box 3',
        side: 'B',
        rows: [
            "Du hast sowohl {icon_attack} als auch {icon_coin} bei Bösewichten abgelegt.",
            "Du hast mehr als 2 Karten erworben",
            "Du hast mehr als 3 {icon_health} verloren.",
            "Es liegen 2 oder mehr {icon_dark_mark} auf dem aktuellen Ort.",
            "Du hast einen Verbündeten ausgespielt.",
        ]
    },
    {
        source: 'Box 4',
        side: 'A',
        rows: [
            "Du hast eine Karte verbannt.",
            "Du hast einem anderen Helden {icon_attack} oder {icon_coin} gegeben.",
            "Du hast {icon_dark_mark} entfernt.",
            "Vor einem Helden liegt ein Dunkle-Künste-Trank aus.",
            "Bei den Hogwarts-Karten liegen 2 Gegenstände aus.",
        ]
    },
    {
        source: 'Box 4',
        side: 'B',
        rows: [
            "Du hast mit einem Hauswürfel gewürfelt.",
            "Du hast 6 oder mehr {icon_coin} ausgegeben.",
            "Du hast deinen Zug mit mindestens einem gesammelten Marker begonnen.",
            "Du hast 2 Gegenstände ausgespielt.",
            "Ein Held hat nur noch 3 {icon_health} oder weniger.",
        ]
    },
];
