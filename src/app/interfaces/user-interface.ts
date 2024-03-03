export interface IUser {
     id ?: number,
     // userName : string,
     userPhone ?: string,
     userEmail ?: string,
     password ?: string,
     productsInCart : number[]
     role ?: string
     isLogined : boolean
}