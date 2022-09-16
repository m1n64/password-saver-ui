import ICategory from "@/interfaces/ICategory";

export default interface IPassword {
    name: string,
    login: string,
    id: number,
    category_id: number,
    category: ICategory
}