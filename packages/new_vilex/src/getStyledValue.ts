const NeedToPxList = ['left', 'top', 'right', 'padding', 'margin', 'width', 'height', 'fontSize']

/**
 * 
 * @param obj 
 * @param key 
 * @returns 
 */
export const getStyledValue = <T extends Record<string, any>> (obj: T, key: string) => {
    const oldValue = obj[key]
    if (NeedToPxList.includes(key) && typeof oldValue === 'number') {
        return oldValue + 'px'
    }
    return oldValue
}