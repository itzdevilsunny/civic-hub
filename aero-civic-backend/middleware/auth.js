const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    // Check if the authorization header exists and starts with 'Bearer'
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Extract the token from the header (Format: "Bearer <token>")
            token = req.headers.authorization.split(' ')[1];

            // Defend against missing secret (using a fallback exclusively for development)
            const secret = process.env.JWT_SECRET || 'aero_civic_dev_secret_key_123';

            // Verify the token using your secret key
            // The decoded payload usually contains the user's ID
            const decoded = jwt.verify(token, secret);

            // Attach the decoded user data to the request object
            req.user = decoded;

            // Move to the next middleware or the route handler
            next();
        } catch (error) {
            console.error('JWT Verification Failed:', error.message);
            return res.status(401).json({
                success: false,
                message: 'Not authorized, token failed or expired'
            });
        }
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized, no token provided'
        });
    }
};

module.exports = { protect };
