import { SemistarModel } from "./semistar.model.js";

// ✅ Create
const createSemesterService = async (payload) => {
  const result = await SemistarModel.create(payload);
  return result;
};

// ✅ Get All
const getAllSemestersService = async () => {
  const semesters = await SemistarModel.find();
  return semesters;
};

// ✅ Get Single
const getSingleSemesterService = async (id) => {
  const semester = await SemistarModel.findById(id);
  return semester;
};

// ✅ Update
const updateSemesterService = async (id, payload) => {
  const updated = await SemistarModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updated;
};

// ✅ Delete
const deleteSemesterService = async (id) => {
  const deleted = await SemistarModel.findByIdAndDelete(id);
  return deleted;
};


 export const SemistarService={createSemesterService,getAllSemestersService,getSingleSemesterService,updateSemesterService,deleteSemesterService}