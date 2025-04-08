import userService from "../services/user.service.js"
const GetAll = async( req, res, next ) => {
    try {
        const users = await userService.GetAll()
        return res.status(200).json({
            data : users
        })
    } catch (error) {
        next( error )
    }
}


const GetById = async( req, res, next ) => {
    try {
        const id = parseInt( req.params.id ) //Lấy ID
        const user = await userService.GetById( id )  //Chọn thằng user từ ID đó nhờ hàm GetByID trong folder service
        return res.status(200).json({
            data : user  // Trả về thông tin dạng data:user và thông báo mã 200
        })
    } catch (error) {
        next( error )
    }
}

const postAll= async (req, res, next) =>{
    try {
        const data= req.body;
        const newUser= userService.Insert(data);
        return res.status(200).json({
            data: newUser,
            message: "Success"
        })
    } catch (error) {
        next (error)
    }
}

const putByID= async( req, res, next) => {
    try {
        const id= parseInt(req.params.id)
        const updatedUser= await userService.Update(req.body,id);
        return res.status(200).json({
            data: updatedUser,
            message: "Success"
        })
    }
    catch (error){
        next (error)
    }
}
const deleteByID= async(req, res, next) => {
    try {
        const id= parseInt(req.params.id);
        const deletedUser= userService.Delete(id);
        return res.status(200).json({
            data: deletedUser,
            message: "Success"
        })
    }
    catch (error){
        next (error)
    }
}
export default {
    GetAll,
    GetById,
    postAll,
    deleteByID,
    putByID,
}