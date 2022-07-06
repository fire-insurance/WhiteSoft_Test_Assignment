/**
 * Обрезает строку до заданного количества символов и добавляет троеточие (если указано).
 *
 * @param text - Исходный текст
 * @param trimNumber - Количество символов, которые требуется сохранить
 * @param ellipsis - Флаг добавления троеточия в конце обработанного текста
 * @returns Исходная строка обрезанная до trimNumber символов с троеточием или без
 *
 */

const trimText = (text: string, trimNumber: number, ellipsis: boolean) => {

    trimNumber = Math.floor(Math.abs(trimNumber))
    const ellipsisText = ellipsis ? '...' : ''

    if (text.length > 200)
        return text.slice(0, trimNumber) + ellipsisText

    return text
}

export default trimText