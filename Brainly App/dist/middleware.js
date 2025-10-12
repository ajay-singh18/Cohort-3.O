import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const auth = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, process.env.JWT_SECRET);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded._id;
        next();
    }
    else {
        res.status(403).json({
            message: "you are not logged in"
        });
    }
};
//# sourceMappingURL=middleware.js.map