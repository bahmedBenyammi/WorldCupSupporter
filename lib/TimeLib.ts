export const getTime = (date: Date) => {
    let m = date.getMinutes()
    let ms
    if (m < 10)
        ms = '0' + m
    else
        ms = "" + m
    let h = date.getHours()
    let hs
    if (h < 10)
        hs = "0" + h
    else
        hs = "" + h
    return hs + ":" + ms
}