const express = require('express');
const router = express.Router();

// A webhook endpoint that hardware sensors or external services hit
router.post('/sensor/parking-capacity', async (req, res) => {
    const { zoneId, currentCapacity, status } = req.body;

    // Grab the io instance from the Express app
    const io = req.app.get('socketio');

    // Emit the event to all connected dashboards (or a specific room)
    if (status === 'FULL') {
        io.emit('capacityAlert', {
            zone: zoneId,
            message: `Parking capacity threshold breached in ${zoneId}. Enforcement required.`,
            timestamp: new Date(),
            severity: 'high'
        });
    } else {
        io.emit('capacityAlert', {
            zone: zoneId,
            message: `${zoneId} parking capacity normalized to ${currentCapacity}.`,
            timestamp: new Date(),
            severity: 'low'
        });
    }

    res.status(200).json({ success: true, message: 'Sensor data broadcasted.' });
});

// Another example for an attendance tracker
router.post('/campus/geofence-entry', async (req, res) => {
    const { studentId, location } = req.body;

    const io = req.app.get('socketio');

    // Broadcast live attendance update to the admin dashboard
    io.emit('attendanceLogged', {
        id: studentId,
        location: location,
        message: `Citizen ${studentId} entered restricted geozone: ${location}`,
        time: new Date().toLocaleTimeString()
    });

    res.status(200).json({ success: true });
});

module.exports = router;
