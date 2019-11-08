
export const user = (parent, args, ctx, info)=>{
    console.log(ctx)
    return{
        id: 111,
        name : 'Intizar',
        age : 4 ,
        email: 'intizarahmad@gmail.com'
    }
}