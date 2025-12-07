import { buildScene } from "./scene";
import { buildLighting } from "./lighting";
import { buildCamera } from "./camera";
import { buildComposition } from "./composition";
import { buildEnvironment } from "./environment";
import { parameterMap, cameraPresets } from "../parameterMap";

export function buildLifestylePrompt({ productMeta, params, userPrompt }) {

  return `
    Lifestyle product photography of ${productMeta?.name}.
    Scene: ${buildScene(params)}, ${buildEnvironment(params)}.
    Lighting: ${buildLighting(params)}.
    Camera: ${buildCamera(params)}.
    Camera distance: ${parameterMap.cameraDistance[params.cameraDistance] ?? ""}.
    Composition: ${buildComposition(params)}.
    Angle: ${cameraPresets.cameraAngles[params.cameraAngle]?.prompt ?? ""}.
    Movement: ${cameraPresets.cameraMovements[params.cameraMovement]?.prompt ?? ""}.
    Additional instructions: ${userPrompt}.
    Hyper realistic, sharp details, correct scale, clean framing.
  `
}
