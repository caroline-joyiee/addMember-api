import { Router } from "express";
import { deleteMember, getMember, patchMember, postMember } from "../controller/addMemberController.js";

export const addMemberRouter = Router()

addMemberRouter.get('/member',getMember)

addMemberRouter.post('/member', postMember)

addMemberRouter.patch('/member/:id', patchMember)

addMemberRouter.delete('/member/:id', deleteMember)