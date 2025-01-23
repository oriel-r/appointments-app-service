import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadData } from "./helpers/preload";
 

const initialize = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database initialized successfully.');
        await preloadData()
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
};

initialize();


