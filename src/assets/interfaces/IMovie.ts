export default interface IMovie {
    id: string,
    title: string,
    rate: number,
    comment: string,
    date: string
}

export const defaultMovie: IMovie = {
    id: '',
    title: '',
    rate: 1,
    comment: '',
    date: ''
}
