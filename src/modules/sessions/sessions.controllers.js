import { SessionServices } from "./session.service.js";


export const createSessionControllers = async (req, res,next) => {
try{
      const result = await SessionServices.createSession(req.body);
  res.status(201).json({
    success: true,
    message: 'Session created successfully',
    data: result,
  });
}
catch(err){
    next(err)
}
};

export const getAllSessionsControllers = async (req, res,next) => {
 try{
     const sessions = await SessionServices.getAllSessions();
  res.status(200).json({
    success: true,
    message: 'All sessions fetched',
    data: sessions,
  });
 }
 catch(err){
    next(err)
 }
};

export const getSingleSessionControllers = async (req, res,next) => {
try{
      const session = await SessionServices.getSingleSession(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Session fetched successfully',
    data: session,
  });
}
catch(err){
    next(err)
}
};

export const updateSessionControllers = async (req, res,next) => {
try{
      const updated = await SessionServices.updateSession(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: 'Session updated successfully',
    data: updated,
  });
}
catch(err){
    next(err)
}
};

export const deleteSessionControllers = async (req, res,next) => {
try{
      const deleted = await SessionServices.deleteSession(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Session deleted successfully',
    data: deleted,
  });
}
catch(err){
    next(err)
}
};


export const SessionControllers={createSessionControllers,getAllSessionsControllers,getSingleSessionControllers,updateSessionControllers,deleteSessionControllers}