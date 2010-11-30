var createContext = require("../lib/conf").createContext;
var createScript = require("../lib/conf").createScript;


var context = createContext({
  
  // server_name: String
  
  server_name: {type: String, defaultValue: "test"},
  
  zone: Number,
  
  server: { section: {
    location: { section: {
      allow: String,
      deny: ["path"]
    }}
  }}
  
});

context.define("DEBUG");


// config = context.parse("./example.conf");

script = createScript("./example.conf");

config = script.runInContext(context);

console.log(config);
