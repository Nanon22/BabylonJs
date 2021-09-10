import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
	"src/scenes/human.ts": any;
	"src/scenes/plane.ts": any;
	"src/scenes/scene/Pingouin.ts": any;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/human.ts": require("./human"),
	"src/scenes/plane.ts": require("./plane"),
	"src/scenes/scene/Pingouin.ts": require("./scene/Pingouin"),
}
