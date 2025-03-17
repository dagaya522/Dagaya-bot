const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://raw.githubusercontent.com/dagaya254/Bot-4to/refs/heads/main/20250303_055414.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello , I am alive now!!\n\n🥶𝐌𝐚𝐝𝐞 𝐛𝐲 🧚‍♂️𝗗𝗔𝗚𝗔𝗬𝗔-𝗠𝗗✨' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
