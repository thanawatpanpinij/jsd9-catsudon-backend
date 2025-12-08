import mongoose from "mongoose";

// Health check endpoint
export const healthCheck = async (req, res, next) => {
  try {
    const dbStatus = mongoose.connection.readyState;
    const dbStatusText =
      {
        0: "disconnected",
        1: "connected",
        2: "connecting",
        3: "disconnecting",
      }[dbStatus] || "unknown";

    const uptime = process.uptime();

    res.status(200).json({
      error: false,
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: Math.floor(uptime),
      database: {
        status: dbStatusText,
        connected: dbStatus === 1,
      },
    });
  } catch (error) {
    next(error);
  }
};
