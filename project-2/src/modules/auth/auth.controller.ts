import catchAsycn from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const register = catchAsycn(async (req, res) => {
  const result = await AuthService.register(req.body);
  sendResponse(res, 201, "User Register Successfully", result);
});

export const AuthController = {
  register,
};
