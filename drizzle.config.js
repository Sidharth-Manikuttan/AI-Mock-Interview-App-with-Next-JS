/** @type { import("drizzle-kit").Config } */
export default{
  schema:"./utils/schema.js",
  dialect:'postgresql',
  dbCredentials:{
      url: 'postgresql://ai-interview-mocker_owner:MTyWFd8zZ3pE@ep-falling-sun-a5vabg7n.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
}