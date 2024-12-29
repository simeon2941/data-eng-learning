import{r as F,a as K,g as H,b as u,L as z,C as w,X as E,Y as j,T as _,c as S,d as C,B as q,e as k,H as Y,M as G,S as J,f as Q,D as X,h as Z,i as R,j as $,k as U,l as P,R as ee}from"./vendor-BCAz5MYv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var T={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L;function te(){if(L)return b;L=1;var t=F(),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(d,o,m){var p,x={},c=null,h=null;m!==void 0&&(c=""+m),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(h=o.ref);for(p in o)l.call(o,p)&&!a.hasOwnProperty(p)&&(x[p]=o[p]);if(d&&d.defaultProps)for(p in o=d.defaultProps,o)x[p]===void 0&&(x[p]=o[p]);return{$$typeof:s,type:d,key:c,ref:h,props:x,_owner:r.current}}return b.Fragment=n,b.jsx=i,b.jsxs=i,b}var A;function se(){return A||(A=1,T.exports=te()),T.exports}var e=se(),N={},D;function re(){if(D)return N;D=1;var t=K();return N.createRoot=t.createRoot,N.hydrateRoot=t.hydrateRoot,N}var ae=re();const ie=H(ae),ne=()=>{const[t,s]=u.useState("timeline"),n=[{stage:"Extract",time:120,records:1e6},{stage:"Transform",time:180,records:95e4},{stage:"Load",time:90,records:95e4}],l=[{metric:"CPU Usage",value:65},{metric:"Memory Usage",value:78},{metric:"Disk I/O",value:45},{metric:"Network",value:55}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{className:`px-4 py-2 text-sm rounded 
            ${t==="timeline"?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>s("timeline"),children:"Pipeline Timeline"}),e.jsx("button",{className:`px-4 py-2 text-sm rounded 
            ${t==="performance"?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>s("performance"),children:"Performance Metrics"})]}),e.jsx("div",{className:"h-64 bg-white p-4 rounded-lg",children:t==="timeline"?e.jsxs(z,{width:600,height:240,data:n,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(E,{dataKey:"stage"}),e.jsx(j,{yAxisId:"left"}),e.jsx(j,{yAxisId:"right",orientation:"right"}),e.jsx(_,{}),e.jsx(S,{}),e.jsx(C,{yAxisId:"left",type:"monotone",dataKey:"time",stroke:"#8884d8",name:"Processing Time (s)"}),e.jsx(C,{yAxisId:"right",type:"monotone",dataKey:"records",stroke:"#82ca9d",name:"Records Processed"})]}):e.jsxs(q,{width:600,height:240,data:l,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(E,{dataKey:"metric"}),e.jsx(j,{}),e.jsx(_,{}),e.jsx(S,{}),e.jsx(k,{dataKey:"value",fill:"#8884d8",name:"Utilization %"})]})})]})},oe=()=>{const[t,s]=u.useState("overview"),n=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Overview"}),e.jsx("p",{className:"mb-4",children:"ETL (Extract, Transform, Load) is a fundamental data engineering process that consists of three main steps:"}),e.jsxs("ul",{className:"list-disc pl-6 mb-6",children:[e.jsxs("li",{className:"mb-2",children:[e.jsx("strong",{children:"Extract:"})," Gathering data from source systems (databases, files, APIs)"]}),e.jsxs("li",{className:"mb-2",children:[e.jsx("strong",{children:"Transform:"})," Cleaning, validating, and restructuring the data to match the target schema"]}),e.jsxs("li",{className:"mb-2",children:[e.jsx("strong",{children:"Load:"})," Writing the processed data to a destination system"]})]}),e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Pipeline Visualization"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:e.jsx(ne,{})})]}),l=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Implementation"}),e.jsx("p",{className:"mb-4",children:"Here's a basic ETL pipeline implementation in Python:"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:e.jsx("pre",{className:"language-python",children:e.jsx("code",{children:`import pandas as pd
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
            raise`})})})]}),r=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Error Handling:"}),e.jsx("p",{children:"Implement robust error handling and logging at each stage"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Validation:"}),e.jsx("p",{children:"Validate data quality at each stage of the pipeline"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Monitoring:"}),e.jsx("p",{children:"Track pipeline performance and data quality metrics"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Documentation:"}),e.jsx("p",{children:"Document data transformations and business rules"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testing:"}),e.jsx("p",{children:"Create unit tests for transformation logic"})]})]})]}),a={overview:e.jsx(n,{}),implementation:e.jsx(l,{}),bestPractices:e.jsx(r,{})};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex space-x-4 border-b",children:Object.keys(a).map(i=>e.jsx("button",{className:`px-4 py-2 text-sm font-medium capitalize 
              ${t===i?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-blue-500"}`,onClick:()=>s(i),children:i},i))}),e.jsx("div",{className:"bg-white rounded-lg",children:a[t]})]})},le=()=>{const[t,s]=u.useState("performance"),n=[{stage:"Data Loading",time:25,memory:15},{stage:"Transformations",time:45,memory:35},{stage:"Window Functions",time:60,memory:45},{stage:"Aggregations",time:30,memory:25},{stage:"Result Writing",time:20,memory:10}],l=[{resource:"CPU Usage",optimized:65,baseline:85},{resource:"Memory Usage",optimized:55,baseline:75},{resource:"Shuffle Read",optimized:40,baseline:70},{resource:"Shuffle Write",optimized:35,baseline:65}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{className:`px-4 py-2 text-sm rounded 
            ${t==="performance"?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>s("performance"),children:"Processing Time"}),e.jsx("button",{className:`px-4 py-2 text-sm rounded 
            ${t==="resources"?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>s("resources"),children:"Resource Usage"})]}),e.jsx("div",{className:"h-64 bg-white p-4 rounded-lg",children:t==="performance"?e.jsxs(z,{width:600,height:240,data:n,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(E,{dataKey:"stage"}),e.jsx(j,{yAxisId:"left"}),e.jsx(j,{yAxisId:"right",orientation:"right"}),e.jsx(_,{}),e.jsx(S,{}),e.jsx(C,{yAxisId:"left",type:"monotone",dataKey:"time",stroke:"#8884d8",name:"Processing Time (s)"}),e.jsx(C,{yAxisId:"right",type:"monotone",dataKey:"memory",stroke:"#82ca9d",name:"Memory Usage (GB)"})]}):e.jsxs(q,{width:600,height:240,data:l,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(E,{dataKey:"resource"}),e.jsx(j,{}),e.jsx(_,{}),e.jsx(S,{}),e.jsx(k,{dataKey:"optimized",fill:"#82ca9d",name:"Optimized"}),e.jsx(k,{dataKey:"baseline",fill:"#8884d8",name:"Baseline"})]})})]})},ce=()=>{const[t,s]=u.useState("overview"),n=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Overview"}),e.jsx("p",{className:"mb-4",children:"Apache Spark is a powerful analytics engine for large-scale data processing. This guide covers advanced analytics techniques including:"}),e.jsxs("ul",{className:"list-disc pl-6 mb-6",children:[e.jsx("li",{className:"mb-2",children:"Complex aggregations and window functions"}),e.jsx("li",{className:"mb-2",children:"Performance optimization techniques"}),e.jsx("li",{className:"mb-2",children:"Best practices for large-scale data processing"})]}),e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Performance Analysis"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:e.jsx(le,{})})]}),l=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Implementation"}),e.jsx("p",{className:"mb-4",children:"Here's an example of advanced PySpark analytics:"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:e.jsx("pre",{className:"language-python",children:e.jsx("code",{children:`from pyspark.sql import SparkSession
from pyspark.sql import Window
from pyspark.sql.functions import *

# Initialize Spark session
spark = SparkSession.builder\\
    .appName("Advanced Analytics")\\
    .config("spark.sql.adaptive.enabled", "true")\\
    .getOrCreate()

# Read and prepare data
df = spark.read.parquet("sales_data.parquet")

# Complex aggregation with window functions
window_spec = Window.partitionBy("category")\\
    .orderBy("date")\\
    .rowsBetween(-6, 0)  # 7-day rolling window

df_analytics = df.withColumn(
    "rolling_avg_revenue",
    avg("revenue").over(window_spec)
).withColumn(
    "revenue_rank",
    rank().over(Window.partitionBy("category")
    .orderBy(desc("revenue")))
).withColumn(
    "pct_total",
    sum("revenue").over(window_spec) / 
    sum("revenue").over(Window.partitionBy("category"))
)

# Optimize performance
df_analytics.cache()

# Complex grouped analytics
result = df_analytics.groupBy("category").agg(
    avg("rolling_avg_revenue").alias("avg_revenue"),
    sum(when(col("revenue_rank") <= 10, col("revenue"))
        .otherwise(0)).alias("top_10_revenue"),
    count(when(col("pct_total") > 0.5, True))
        .alias("high_impact_days")
)`})})}),e.jsx("h3",{className:"text-xl font-bold mb-4",children:"SQL Implementation"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:e.jsx("pre",{className:"language-sql",children:e.jsx("code",{children:`-- Equivalent SQL implementation
WITH windowed_sales AS (
  SELECT *,
    AVG(revenue) OVER (
      PARTITION BY category
      ORDER BY date
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as rolling_avg_revenue,
    RANK() OVER (
      PARTITION BY category
      ORDER BY revenue DESC
    ) as revenue_rank,
    SUM(revenue) OVER (
      PARTITION BY category
      ORDER BY date
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) / SUM(revenue) OVER (PARTITION BY category) as pct_total
  FROM sales_data
)
SELECT
  category,
  AVG(rolling_avg_revenue) as avg_revenue,
  SUM(CASE WHEN revenue_rank <= 10 THEN revenue ELSE 0 END) as top_10_revenue,
  COUNT(CASE WHEN pct_total > 0.5 THEN 1 END) as high_impact_days
FROM windowed_sales
GROUP BY category;`})})})]}),r=()=>e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Performance Optimization"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Caching Strategy:"}),e.jsx("p",{children:"Cache intermediate results when data is reused multiple times"}),e.jsx("pre",{className:"language-python",children:e.jsx("code",{children:`# Cache intermediate results
df_transformed.cache()

# Force cache materialization
df_transformed.count()

# Uncache when no longer needed
df_transformed.unpersist()`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partition Optimization:"}),e.jsx("p",{children:"Optimize data partitioning for better parallel processing"}),e.jsx("pre",{className:"language-python",children:e.jsx("code",{children:`# Repartition data
df_optimized = df.repartition(
    "category"
).sortWithinPartitions("date")`})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Query Optimization:"}),e.jsx("p",{children:"Use broadcast joins for small tables"}),e.jsx("pre",{className:"language-python",children:e.jsx("code",{children:`from pyspark.sql.functions import broadcast

# Broadcast small lookup table
result = df.join(
    broadcast(lookup_df),
    "category"
)`})})]})]})]}),a={overview:e.jsx(n,{}),implementation:e.jsx(l,{}),optimization:e.jsx(r,{})};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex space-x-4 border-b",children:Object.keys(a).map(i=>e.jsx("button",{className:`px-4 py-2 text-sm font-medium capitalize 
              ${t===i?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-blue-500"}`,onClick:()=>s(i),children:i},i))}),e.jsx("div",{className:"bg-white rounded-lg",children:a[t]})]})},W=[{id:"etl-basics",category:"Fundamentals",title:"ETL Basics",description:"Learn the fundamentals of Extract, Transform, Load processes",difficulty:"Beginner",topics:["ETL","Data Pipeline","Python","Pandas"],prerequisites:["Basic Python knowledge","Understanding of CSV files"],order:1,created:"2024-01-01",updated:"2024-03-15",author:"John Doe",estimatedTime:"30 minutes",visualization:"ETLPipeline",component:oe},{id:"spark-analytics",category:"Analytics",title:"Spark Analytics Deep Dive",description:"Learn advanced data analytics techniques using PySpark",difficulty:"Intermediate",topics:["Spark","Analytics","Big Data"],prerequisites:["Python knowledge","Basic SQL"],order:2,created:"2024-01-15",updated:"2024-03-20",author:"Jane Smith",estimatedTime:"45 minutes",visualization:"DataFlowChart",component:ce}];async function de(){return console.log("Starting to load metadata..."),W.map(({component:t,...s})=>s)}async function me(t){try{const s=W.find(n=>n.id===t);return s?s.component:(console.error(`Example not found: ${t}`),null)}catch(s){return console.error(`Error loading component for ${t}:`,s),null}}const M=u.createContext();function xe({children:t}){const[s,n]=u.useState([]),[l,r]=u.useState(null),[a,i]=u.useState(""),[d,o]=u.useState(!0),[m,p]=u.useState(!0),[x,c]=u.useState(null);u.useEffect(()=>{async function f(){try{console.log("Loading examples..."),p(!0);const g=await de();if(console.log("Loaded examples:",g),!g||g.length===0){c("No examples available");return}n(g)}catch(g){console.error("Failed to load examples:",g),c(g.message)}finally{p(!1)}}f()},[]);const V={examples:s.filter(f=>{var g,O;return((g=f==null?void 0:f.title)==null?void 0:g.toLowerCase().includes((a==null?void 0:a.toLowerCase())||""))||((O=f==null?void 0:f.description)==null?void 0:O.toLowerCase().includes((a==null?void 0:a.toLowerCase())||""))}),selectedTopic:l,setSelectedTopic:async f=>{try{if(f){const g=await me(f.id);r({...f,component:g})}else r(null)}catch(g){console.error("Error loading topic:",g),c("Failed to load topic content")}},searchQuery:a,setSearchQuery:i,isSidebarOpen:d,setSidebarOpen:o,loading:m,error:x};return e.jsx(M.Provider,{value:V,children:t})}const v=()=>{const t=u.useContext(M);if(!t)throw new Error("useTopics must be used within a TopicProvider");return t},ue=()=>{const{setSearchQuery:t,searchQuery:s,isSidebarOpen:n,setSidebarOpen:l,examples:r,loading:a,error:i,setSelectedTopic:d,selectedTopic:o}=v(),m=(r==null?void 0:r.reduce((c,h)=>(h!=null&&h.category&&(c[h.category]=c[h.category]||[],c[h.category].push(h)),c),{}))||{},p=()=>{var c;t(""),(c=document.getElementById("search-input"))==null||c.focus()},x=()=>{d(null),t("")};return e.jsxs("div",{className:`${n?"w-64":"w-16"} bg-white shadow-lg transition-all duration-300 flex flex-col`,children:[e.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-gray-100",children:[e.jsxs("button",{onClick:x,className:`font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center ${!n&&"hidden"}`,children:[e.jsx(Y,{size:20,className:"mr-2"}),"DeMastery"]}),e.jsx("button",{onClick:()=>l(!n),className:"p-2 hover:bg-gray-100 rounded-lg",title:n?"Collapse sidebar":"Expand sidebar",children:e.jsx(G,{size:20})})]}),n&&e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"search-input",type:"text",placeholder:"Search examples... (Ctrl+K)",className:"w-full p-2 pl-8 pr-8 border rounded-lg bg-gray-50 focus:bg-white transition-colors",value:s,onChange:c=>t(c.target.value)}),e.jsx(J,{className:"absolute left-2 top-3 text-gray-400",size:16}),s&&e.jsx("button",{onClick:p,className:"absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full",children:e.jsx(Q,{size:16,className:"text-gray-400"})})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4",children:[e.jsx("div",{className:"sticky top-0 bg-white py-2",children:e.jsx("h2",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"CATEGORIES"})}),a&&e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"})}),i&&e.jsx("div",{className:"text-sm text-red-500 py-4",children:"Error loading examples"}),!a&&!i&&Object.keys(m).length===0&&e.jsx("div",{className:"text-sm text-gray-500 py-4",children:"No examples available"}),e.jsx("div",{className:"space-y-4 pb-4",children:Object.entries(m).map(([c,h])=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center text-sm font-medium text-gray-900",children:[e.jsx(X,{size:16,className:"mr-2 text-gray-400"}),c,e.jsxs("span",{className:"ml-2 text-xs text-gray-400",children:["(",h.length,")"]})]}),e.jsx("div",{className:"ml-6 space-y-1",children:h.map(y=>e.jsxs("button",{onClick:()=>d(y),className:`w-full text-left group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 ${(o==null?void 0:o.id)===y.id?"bg-blue-50 text-blue-600":"text-gray-600"}`,children:[e.jsx("span",{className:"text-sm truncate",children:y.title}),e.jsxs("div",{className:"flex items-center opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${y.difficulty==="Beginner"?"bg-green-50 text-green-700":y.difficulty==="Intermediate"?"bg-blue-50 text-blue-700":"bg-purple-50 text-purple-700"}`,children:y.difficulty}),e.jsx(Z,{size:14,className:"ml-1 text-gray-400"})]})]},y.id))})]},c))})]})]})]})},pe=({children:t})=>e.jsxs("div",{className:"flex h-screen bg-gray-100",children:[e.jsx(ue,{}),e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsx("main",{className:"container mx-auto px-6 py-8",children:t})})]}),he=({example:t})=>{const{setSelectedTopic:s}=v(),n={Beginner:"bg-emerald-50 text-emerald-700 border-emerald-100",Intermediate:"bg-blue-50 text-blue-700 border-blue-100",Advanced:"bg-purple-50 text-purple-700 border-purple-100"},l={Beginner:"bg-emerald-100 text-emerald-600",Intermediate:"bg-blue-100 text-blue-600",Advanced:"bg-purple-100 text-purple-600"};return e.jsx("div",{onClick:()=>s(t),className:"group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-start space-x-4 mb-4",children:[e.jsx("div",{className:`p-3 rounded-lg ${l[t.difficulty]}`,children:e.jsx(R,{className:"h-6 w-6"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-blue-600 transition-colors",children:t.title}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:t.description})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-4",children:[e.jsxs("div",{className:"flex items-center text-gray-500 text-sm",children:[e.jsx($,{size:14,className:"mr-1"}),t.category]}),e.jsxs("div",{className:"flex items-center text-gray-500 text-sm",children:[e.jsx(U,{size:14,className:"mr-1"}),t.estimatedTime||`${t.time} minutes`]})]}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx("span",{className:`text-xs px-3 py-1 rounded-full ${n[t.difficulty]} font-medium`,children:t.difficulty})})]})})},ge=()=>{const{examples:t,loading:s,error:n,searchQuery:l}=v();return s?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-500",children:"Loading examples..."})]})}):n?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"text-center text-red-500",children:e.jsxs("p",{children:["Error loading examples: ",n]})})}):e.jsxs("div",{className:"space-y-12 py-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h1",{className:"text-3xl font-semibold text-gray-900",children:"Welcome to DeMastery"}),e.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Master data engineering concepts through bite-sized examples"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4",children:t.map(r=>e.jsx(he,{example:r},r.id))}),t.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",children:e.jsx(R,{className:"h-8 w-8 text-gray-400"})}),e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:l?"No matching examples found":"No examples available"}),e.jsx("p",{className:"text-gray-500",children:l?"Try adjusting your search terms or browse all examples":"Check back soon for new content!"})]})]})},fe="modulepreload",ye=function(t){return"/"+t},I={},B=function(s,n,l){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(n.map(o=>{if(o=ye(o),o in I)return;I[o]=!0;const m=o.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${p}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":fe,m||(x.as="script"),x.crossOrigin="",x.href=o,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((c,h)=>{x.addEventListener("load",c),x.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return r.then(i=>{for(const d of i||[])d.status==="rejected"&&a(d.reason);return s().catch(a)})},je=()=>{const{selectedTopic:t,setSelectedTopic:s}=v();u.useState("overview");const[n,l]=u.useState(null),[r,a]=u.useState(!0),[i,d]=u.useState(null);return u.useEffect(()=>{if(!t)return;(async()=>{a(!0),d(null);try{const m=`../../examples/${t.category.toLowerCase()}/${t.difficulty.toLowerCase()}/${t.id}`,[p,x]=await Promise.all([B(()=>import(`${m}/index.jsx`),[]),B(()=>import(`${m}/metadata.js`),[])]);l({Component:p.default,metadata:x.metadata})}catch(m){console.error("Error loading example:",m),d("Failed to load example content. Please try again later.")}finally{a(!1)}})()},[t]),t?r?e.jsx("div",{className:"max-w-5xl mx-auto p-8",children:e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"})})}):i?e.jsxs("div",{className:"max-w-5xl mx-auto p-8",children:[e.jsxs("button",{onClick:()=>s(null),className:"inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4",children:[e.jsx(P,{className:"h-4 w-4 mr-1"}),"Back to Examples"]}),e.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 rounded-lg p-4",children:i})]}):e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6 p-8",children:[e.jsxs("button",{onClick:()=>s(null),className:"inline-flex items-center text-sm text-gray-500 hover:text-gray-900",children:[e.jsx(P,{className:"h-4 w-4 mr-1"}),"Back to Examples"]}),e.jsx("div",{className:"bg-white rounded-lg p-6 shadow-sm",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:t.title}),e.jsx("p",{className:"text-gray-600",children:t.description}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-4",children:[e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx(U,{size:16,className:"mr-2"}),t.estimatedTime||"30 minutes"]}),e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx($,{size:16,className:"mr-2"}),t.category]}),e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx(R,{size:16,className:"mr-2"}),t.difficulty]})]}),t.prerequisites&&t.prerequisites.length>0&&e.jsxs("div",{className:"pt-4",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700",children:"Prerequisites"}),e.jsx("ul",{className:"mt-2 text-sm text-gray-600 list-disc pl-5",children:t.prerequisites.map((o,m)=>e.jsx("li",{children:o},m))})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-sm",children:n?e.jsx(u.Suspense,{fallback:e.jsx("div",{className:"p-6",children:"Loading content..."}),children:e.jsx(n.Component,{metadata:n.metadata})}):e.jsx("div",{className:"p-6 text-gray-500",children:"Example content not available."})})]}):null},be=()=>{const{selectedTopic:t}=v();return e.jsx("div",{className:"max-w-7xl mx-auto",children:t?e.jsx(je,{}):e.jsx(ge,{})})};function ve(){return e.jsx(xe,{children:e.jsx(pe,{children:e.jsx(be,{})})})}ie.createRoot(document.getElementById("root")).render(e.jsx(ee.StrictMode,{children:e.jsx(ve,{})}));
