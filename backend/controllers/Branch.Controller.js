import BranchModel from "../models/Branch.Model.js";

export const createBranch = async (req, res) => {
  try {
    const { branchName } = req.body;
    if (!branchName) throw new Error("Invalid branch name");
    const existingBranch = await BranchModel.findOne({
      where: { branchName: branchName },
    });
    if (existingBranch) {
      throw new Error("This branch already exists");
    }
    await BranchModel.create({branchName});
    return res.status(201).json({ message: "Success" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateBranch = async (req, res) => {
  try {
    const { branchName, branchId } = req.body;
    if (!branchName || !branchId) throw new Error("Invalid Update Data");
    const foundBranch = BranchModel.findByPk(branchId);
    if (!foundBranch) throw new Error("Invalid Branch Id");
    const existingBranch = await BranchModel.findOne({
      where: { branchName: branchName },
    });
    if (existingBranch && existingBranch.id !== branchId) {
      throw new Error("This branch already exists");
    }
    await BranchModel.update(
      { branchName: branchName },
      { where: { id: branchId } }
    );
    return res.status(201).json({ message: "updated successfully" });
  } catch (error) {
    return res.status(404).json({error: error.message });
  }
};

export const deleteBranch = async (req, res) => {
  try {
    const { branchId } = req.body;
    if (!branchId) throw new Error("Invalid branch ID");
    await BranchModel.destroy({ where: { id: branchId } });
    return res.status(201).json({ message: "deleted successfully" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const getAllBranches = async (req, res) => {
  try {
    const branches = await BranchModel.findAll();
    return res.status(200).json(branches);
  } catch (error) {
    return res.status(404).json({error: error.message });
  }
};
