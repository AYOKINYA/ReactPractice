import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "unityBuild/Web.loader.js",
  dataUrl: "unityBuild/Web.data",
  frameworkUrl: "unityBuild/Web.framework.js",
  codeUrl: "unityBuild/Web.wasm",
});

const UnityScreen = () => (
    <Unity unityContext={unityContext} className="unity-context"/ >
)

export default UnityScreen;