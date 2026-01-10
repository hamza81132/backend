// import { isValidObjectId } from "mongoose";

// function checkId(req, res, next) {
//   if (!isValidObjectId(req.params.id)) {
//     res.status(404);
//     throw new Error(`Invalid Object Of: ${req.params.id}`);
//   }
//   next();
// }

// export default checkId;
import { isValidObjectId } from "mongoose";

function checkId(req, res, next) {
  const { id } = req.query; // 🔥 FIXED

  if (!id || !isValidObjectId(id)) {
    return res
      .status(404)
      .json({ message: `Invalid Object Id: ${id}` });
  }

  return next();
}

export default checkId;
