const trimText = (text: string, trimNumber: number, ellipsis: boolean) => {
    trimNumber = Math.floor(Math.abs(trimNumber))
    
    const ellipsisText = ellipsis ? '...' : ''
    return text.slice(0, ellipsis ? trimNumber - 3 : trimNumber) + ellipsisText
}

export default trimText