import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.json({
                message: "No token provided"
            });
        }
        //  const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        if (decoded) {
            //@ts-ignore
            req.userId = decoded.id;
            next();
        }
    }
    catch (e) {
        res.status(403).json({
            message: "Authorization failed"
        });
    }
};
//# sourceMappingURL=middleware.js.map