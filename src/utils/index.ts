export const formatCellphone = (data: string) => {
    const arr = data.split("")
    arr.splice(0, 0, "(")
    arr.splice(3, 0, ")")
    arr.splice(9, 0, "-")
    return arr.join("")
}