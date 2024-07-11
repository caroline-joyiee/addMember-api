import { Router } from "express";
import { deleteMember, getMember, patchMember, postMember } from "../controller/addMemberController.js";
import { upload } from "../middleware/uploads.js";

export const addMemberRouter = Router();

addMemberRouter.get('/member', getMember);

addMemberRouter.post('/member', upload.single('image'), postMember);

addMemberRouter.patch('/member/:id', patchMember);

addMemberRouter.delete('/member/:id', deleteMember)