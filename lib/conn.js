import mongoose from 'mongoose';

const connect = async () => {
    try {
        const MONGO_URI = process.env.mongoURL; 

        if (!MONGO_URI) {
            // Add a clear log for debugging!
            console.error("CRITICAL ERROR: mongoURL environment variable is missing.");
            return; // Stop execution if the URI is not found
        }
        
        await mongoose.connect(MONGO_URI); 
        
        console.log('MongoDB connected successfully');
    } catch (error) {
        // ... (your existing error handling)
        console.error('Connection Unsuccessful', error); 
    }
};

export default connect;