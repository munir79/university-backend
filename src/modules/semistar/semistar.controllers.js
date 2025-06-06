import { SemistarService } from "./semistar.service.js";


// ✅ Create
 const createSemesterControllers  = async (req, res,next) => {
    
  try {
    const data=req.body;
    const result = await SemistarService.createSemesterService(data);
    res.status(201).json({
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error)
    };
  
};

// ✅ Get All
 const getAllSemestersControllers  = async (req, res,next) => {
  try {
    const semesters = await SemistarService.getAllSemestersService();
    res.status(200).json({
      success: true,
      message: 'All semesters fetched',
      data: semesters,
    });
  } catch (error) {
     next(error);
    };
  
};

// ✅ Get Single
 const getSingleSemesterControllers  = async (req, res,next) => {
  try {
    const semester = await SemistarService.getSingleSemesterService(req.params.id);
    if (!semester) {
      return res.status(404).json({
        success: false,
        message: 'Semester not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Semester found',
      data: semester,
    });
  } catch (error) {
    next(error)
  }
};

// ✅ Update
 const updateSemesterControllers  = async (req, res,next) => {
  try {
    const updated = await SemistarService.updateSemesterService(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Semester updated',
      data: updated,
    });
  } catch (error) {
   next(error)
    };
  
};

// ✅ Delete
 const deleteSemesterControllers  = async (req, res) => {
  try {
    const deleted = await SemistarService.deleteSemesterService(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Semester not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Semester deleted successfully',
      data: deleted,
    });
  } catch (error) {
    next(error)
  }
};


export const SemistarControllers={createSemesterControllers,getAllSemestersControllers,getSingleSemesterControllers,updateSemesterControllers,deleteSemesterControllers}