import pandas as pd
import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ETLPipeline:
    def __init__(self, source_path, destination_path):
        self.source_path = source_path
        self.destination_path = destination_path
        
    def extract(self):
        logger.info("Starting data extraction")
        try:
            df = pd.read_csv(self.source_path)
            return df
        except Exception as e:
            logger.error(f"Error during extraction: {str(e)}")
            raise

    def transform(self, df):
        logger.info("Starting data transformation")
        try:
            # Clean data
            df = df.dropna()
            
            # Convert dates
            df['date'] = pd.to_datetime(df['date'])
            
            # Add derived columns
            df['year'] = df['date'].dt.year
            df['month'] = df['date'].dt.month
            
            return df
        except Exception as e:
            logger.error(f"Error during transformation: {str(e)}")
            raise

    def load(self, df):
        logger.info("Starting data load")
        try:
            df.to_csv(self.destination_path, index=False)
            logger.info("Data successfully loaded")
        except Exception as e:
            logger.error(f"Error during load: {str(e)}")
            raise

    def run(self):
        try:
            df = self.extract()
            df_transformed = self.transform(df)
            self.load(df_transformed)
            logger.info("ETL pipeline completed successfully")
        except Exception as e:
            logger.error(f"Pipeline failed: {str(e)}")
            raise

# Usage example
if __name__ == "__main__":
    pipeline = ETLPipeline("input.csv", "output.csv")
    pipeline.run()