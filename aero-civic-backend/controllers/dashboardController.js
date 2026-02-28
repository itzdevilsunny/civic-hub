const User = require('../models/User');
const ServiceRequest = require('../models/ServiceRequest');
const Initiative = require('../models/Initiative');

// @desc    Get dashboard aggregated statistics
// @route   GET /api/v1/dashboard/stats
// @access  Private (Mocked for now)
exports.getDashboardStats = async (req, res) => {
    try {
        // Mock user ID for demonstration (In production, extracted from JWT req.user.id)
        const userId = "65a1b2c3d4e5f6g7h8i9j0k1";

        // In a real scenario with a populated DB we would use:
        // const [user, pendingServices, activeInitiatives] = await Promise.all([
        //   User.findById(userId).select('metrics'),
        //   ServiceRequest.countDocuments({ user: userId, status: { $ne: 'Resolved' } }),
        //   Initiative.countDocuments({ stage: { $in: ['Committee Review', 'Active Development'] } })
        // ]);

        // For demonstration, we'll return the formatted mock data directly
        // so the frontend can immediately consume it if connected.

        res.status(200).json({
            success: true,
            data: {
                digitalLiteracy: {
                    score: 98,
                    status: 'Advanced'
                },
                democracyHub: {
                    upcomingTownhalls: 3,
                    nextEventDays: 14
                },
                petitions: {
                    supported: 12,
                    activePlatformWide: 142
                },
                services: {
                    pendingRequests: 0,
                    statusText: 'All clear'
                }
            }
        });

    } catch (error) {
        console.error('Dashboard Aggregation Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
