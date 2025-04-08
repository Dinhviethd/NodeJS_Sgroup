import DbHelper from '../helpers/DbHelper.js'

const GetAll = async() => {
    const db = await DbHelper.readDb()
    return db.User
}

const GetById = async(id) => {
    const db = await DbHelper.readDb()
    const index = db.User.findIndex( (user) => user.id === id )
    if ( index === -1 ) {
        throw new Error("Not Found")
    }
    return db.User[index]
}

const Insert= async (userData) => {
    const db= await DbHelper.readDb()
    const maxID= db.User.reduce((max,user) => {Math.max(max, user?.id || 0)}, 0)
    const nextID= maxID+1;
    const newUser= {...userData, id: nextID}
    db.User.push(newUser);
    await DbHelper.writeDb(db)
    return newUser
}

const Delete= async (id) => {
    const db= await DbHelper.readDb()
    const index= db.User.findIndex((user) => user.id === id)
    if (index === -1){
        throw new Error("Not Found")
    }
    const [deletedUser] = db.User.splice(index, 1);
    await DbHelper.writeDb(db);
    return deletedUser;
}

const Update= async (userData, id) =>{
    const db= await DbHelper.readDb();
    const index= db.User.findIndex((user) => user.id===id)
    if (index === -1){
        throw new Error ("Not Found")
    }
    const updateUser= {...db.User[index], ...userData}
    db.User[index]= updateUser;
    await DbHelper.writeDb(db);
    return updateUser;
}
export default {
    GetAll,
    GetById,
    Insert,
    Delete,
    Update,
}