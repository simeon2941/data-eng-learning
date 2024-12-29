from pyspark.sql import SparkSession
from pyspark.sql import Window
from pyspark.sql.functions import *
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SparkAnalytics:
    def __init__(self, app_name="Advanced Analytics"):
        self.spark = SparkSession.builder\
            .appName(app_name)\
            .config("spark.sql.adaptive.enabled", "true")\
            .getOrCreate()
        
        logger.info(f"Initialized Spark session: {app_name}")

    def prepare_data(self, path):
        """Load and prepare data for analysis"""
        logger.info(f"Loading data from: {path}")
        return self.spark.read.parquet(path)

    def calculate_metrics(self, df):
        """Calculate advanced analytics metrics"""
        # Define window specifications
        date_window = Window.partitionBy("category")\
            .orderBy("date")\
            .rowsBetween(-6, 0)  # 7-day rolling window

        rank_window = Window.partitionBy("category")\
            .orderBy(desc("revenue"))

        # Calculate metrics
        return df.withColumn(
            "rolling_avg_revenue",
            avg("revenue").over(date_window)
        ).withColumn(
            "revenue_rank",
            rank().over(rank_window)
        ).withColumn(
            "pct_total",
            sum("revenue").over(date_window) / 
            sum("revenue").over(Window.partitionBy("category"))
        )

    def optimize_performance(self, df):
        """Apply performance optimizations"""
        # Repartition data
        df_optimized = df.repartition(
            "category"
        ).sortWithinPartitions("date")

        # Cache for multiple uses
        df_optimized.cache()
        
        return df_optimized

    def analyze_trends(self, df):
        """Analyze sales trends"""
        return df.groupBy("category").agg(
            avg("rolling_avg_revenue").alias("avg_revenue"),
            sum(when(col("revenue_rank") <= 10, col("revenue"))
                .otherwise(0)).alias("top_10_revenue"),
            count(when(col("pct_total") > 0.5, True))
                .alias("high_impact_days")
        )

    def run