import { documentAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function testDocumentAgent() {
  console.log("🧪 Testing Document Processing Agent...\n");

  try {
    
    // console.log("📄 Test 1: List Files");
    // const result1 = await documentAgent(
    //   "List all files in the current directory"
    // );
    // console.log("Response:", result1.response);
    // console.log("---\n");
    console.log("📄 Test 1: List Files");
    const result1 = await documentAgent(
      "change directory to /home/blackie/Documents/ and list the files in that directory"
    );
    console.log("Response:", result1.response);
    console.log("---\n");

    console.log("📄 Test 2: Analyze AIGovernance.pdf");
    const result2 = await documentAgent(
      "Analyze the AIGovernance.pdf file and provide a comprehensive summary"
    );
    console.log("Response:", result2.response);
    console.log("---\n");

    console.log("📄 Test 3: Analyze next.html");
    const result3 = await documentAgent(
      "Analyze all the files in this directory /home/blackie/Documents/ and provide a comprehensive summary"
    );
    console.log("Response:", result3.response);
    console.log("---\n");
    
    console.log("✅ All tests completed successfully!");

  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

testDocumentAgent();