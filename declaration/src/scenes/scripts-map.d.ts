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
export declare const scriptsMap: ISceneScriptMap;
