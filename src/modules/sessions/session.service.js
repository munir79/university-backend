import { SessionModel } from "./session.model.js";

 const createSession = async (data) => {
  const newSession = await SessionModel.create(data);
  return newSession;
};

 const getAllSessions = async () => {
  const result=await SessionModel.find();
  return result;
};

 const getSingleSession = async (id) => {
  const result= SessionModel.findById(id);
  return result;
};

 const updateSession = async (id, payload) => {
  const result= SessionModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

 const deleteSession = async (id) => {
  const result= Session.findByIdAndDelete(id);
  return result;
};

export const SessionServices={createSession,getAllSessions,getSingleSession,updateSession,deleteSession}
