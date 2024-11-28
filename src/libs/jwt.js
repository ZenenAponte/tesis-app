import jwt from 'jsonwebtoken'



export function createToken(payload) {
    return new Promise<string>((resolve, reject) => {
        jwt.sign({ id: payload }, "TOKEN_SECRET", { expiresIn: "24h" }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}