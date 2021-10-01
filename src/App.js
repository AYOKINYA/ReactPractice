import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "unityBuild/Web.loader.js",
  dataUrl: "unityBuild/Web.data",
  frameworkUrl: "unityBuild/Web.framework.js",
  codeUrl: "unityBuild/Web.wasm",
});

function App() {
  return <div>
          <Unity unityContext={unityContext} className="unity-context"/ >
         </div>;
}

export default App;
