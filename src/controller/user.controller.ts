import { Request, Response } from "express";
import userModel from "../models/user.model.js";

export const getUsersDatas = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();

    res.json({
      ok: true,
      msg: "Users fetched",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error fetching users",
      data: null,
    });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { username, age, isActive } = req.body;

    // manual validation
    if (!username || typeof username !== "string") {
      return res.status(400).json({
        ok: false,
        msg: "username is required and must be string",
        data: null,
      });
    }

    if (typeof age !== "number") {
      return res.status(400).json({
        ok: false,
        msg: "age must be number",
        data: null,
      });
    }

    if (isActive !== undefined && typeof isActive !== "boolean") {
      return res.status(400).json({
        ok: false,
        msg: "isActive must be boolean",
        data: null,
      });
    }

    const user = await userModel.create({
      username: username.trim(),
      age,
      isActive: isActive ?? true,
    });

    res.status(201).json({
      ok: true,
      msg: "User created",
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error creating user",
      data: null,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, age, isActive } = req.body;

    const updateData: any = {};

    // manual validation + whitelist fields
    if (username !== undefined) {
      if (typeof username !== "string") {
        return res.status(400).json({
          ok: false,
          msg: "username must be string",
          data: null,
        });
      }
      updateData.username = username.trim();
    }

    if (age !== undefined) {
      if (typeof age !== "number") {
        return res.status(400).json({
          ok: false,
          msg: "age must be number",
          data: null,
        });
      }
      updateData.age = age;
    }

    if (isActive !== undefined) {
      if (typeof isActive !== "boolean") {
        return res.status(400).json({
          ok: false,
          msg: "isActive must be boolean",
          data: null,
        });
      }
      updateData.isActive = isActive;
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      ok: true,
      msg: "User updated",
      data: updatedUser,
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error updating user",
      data: null,
    });
  }
};
