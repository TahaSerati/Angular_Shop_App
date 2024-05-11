export interface ICategories {
     id? : number,
     nameC: string,
     parentSubs: parentSubs[]
}


export interface parentSubs {
     namePs: string,
     address?: string,
     childSubs: string[]
}
