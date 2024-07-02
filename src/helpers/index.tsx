import reactStringReplace from 'react-string-replace';
import React from 'react';

export function getEnumKeyByEnumValue(myEnum: Record<string | number, string>, enumValue: number | string): string {
    const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : '';
}

export function getRandomArrayKey<T>(input: Array<T>) {
    return ~~(Math.random() * input.length);
}

export function getRandomArrayElement<T>(input: Array<T>): T {
    return input[getRandomArrayKey(input)];
}

export function replaceIconStrings(text: string): React.ReactNode[] {
    let result;
    result = reactStringReplace(text, "{icon_attack}", (match, index) => <React.Fragment key={match + index}>⚡️</React.Fragment>);
    result = reactStringReplace(result, "{icon_health}", (match, index) => <React.Fragment key={match + index}>❤️</React.Fragment>);
    result = reactStringReplace(result, "{icon_coin}", (match, index) => <React.Fragment key={match + index}>🪙</React.Fragment>);
    result = reactStringReplace(result, "{icon_dark_mark}", (match, index) => <React.Fragment key={match + index}>💀</React.Fragment>);
    return result;
}
