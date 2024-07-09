import { addMemberModel } from "../models/addMember.js";

//Define Logic

export const getMember = async (req, res, next) => {
    try {
        const viewMembers = await addMemberModel.find()
        res.json(viewMembers)
    } catch (error) {
       next(error) 
    }
}


export const postMember = async (req, res, next) => {
    try {
        const addMember = await addMemberModel.create({
            ...req.body,
            image: req.file?.filename
    })
    res.status(201).json(addMember)
    } catch (error) {
        next(error)
    }
}

export const patchMember = async (req, res, next) => {
    try {
        const updateMember = await addMemberModel.findByIdUpdate(req.params.id, 
            {...req.body, image: req?.file?.filename}, {new: true})
            res.json(updateMember);
    } catch (error) {
        next(error)
    }
}

export const deleteMember = async (req, res, next) => {
    try {
        const eraseMember = await addMemberModel.findByIdDelete(req.params.id, 
             {...req.body, image: req?.file?.filename}, {new:true});
            res.json(eraseMember)
    } catch (error) {
        next(error)
    }
}