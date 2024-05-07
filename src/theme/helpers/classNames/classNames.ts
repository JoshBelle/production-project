type Mods = Record<string, boolean | string>;



export function classNames(className: string, mods: Mods, addititonal:string[]): string {
    return [
        className,
        ...addititonal,
        Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ].join(' ')
}
