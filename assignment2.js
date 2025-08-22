//Function1: To launch the  Browser
function launchBrowser(browserName) 
{ 
   if (browserName) {
    console.log("Launch the chrome Browser");
   } else { 
    console.log("Do not launch the Browser");
    
   }  
}

//Function2: runTest
function runTest(testType) {

    switch (testType) {
    case "Smoke":
        console.log("smoke tests");
        break;   
    case "Sanity":
        console.log("Sanity tests ");
        break;
    case "Regression":
        console.log("Regression tests");
        break;

    default:
        console.log("smoke test defaults"); 
        break;
    
}
}

//Function Calls:
launchBrowser("chrome");
runTest("Smoke");
runTest("Sanity");
runTest("Regression");
runTest();



