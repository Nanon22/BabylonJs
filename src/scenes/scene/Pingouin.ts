import { double, int, Mesh, PointerEventTypes, PointerInfo, UniversalCamera, Vector3 } from "@babylonjs/core";
import { fromScene, onPointerEvent } from "../decorators";

/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 * 
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
export default class MyScript extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { 
        
    }

    public sign: int;
    public myTime: int;

    @fromScene('camera')
    _camera: UniversalCamera
    
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        this.myTime = 0;
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        //this.rotate(new Vector3(0, 1, 0), Math.PI);
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        this.myTime += this.getEngine().getDeltaTime() * 0.001;
        var cos = Math.cos(this.myTime);

        var saveSign = this.sign;
        this.sign = Math.sign(cos);

        if(this.sign != saveSign) {
            this.rotate(new Vector3(0, 1, 0), Math.PI);
        }

        this.position.x += cos * 0.2;
        
            
    }

    // @onPointerEvent(PointerEventTypes.POINTERTAP, true)
    // private onClick(info: PointerInfo) : void {
    //     var direction = info.pickInfo.pickedPoint.subtract(this._camera.globalPosition)
    //     this.applyImpulse(direction, info.pickInfo.pickedPoint)
    // }
    
}
