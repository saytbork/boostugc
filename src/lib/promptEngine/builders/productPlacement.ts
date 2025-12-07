import { buildScene } from "../builders/scene";
import { buildLighting } from "../builders/lighting";
import { buildCamera } from "../builders/camera";
import { buildComposition } from "../builders/composition";
import { buildEnvironment } from "../builders/environment";
import { parameterMap } from "../parameterMap";

export function buildProductPlacementPrompt({
  productMeta,
  params,
  userPrompt
}) {

  const scene = buildScene(params);
  const lighting = buildLighting(params);
  const camera = buildCamera(params);
  const composition = buildComposition(params);
  const environment = buildEnvironment(params);

  const cameraDistance =
    parameterMap.cameraDistance?.[params.cameraDistance] ?? "";

  const mapped = Object.entries(parameterMap)
    .filter(([key]) =>
      key !== "age" &&
      key !== "gender" &&
      key !== "ethnicity" &&
      key !== "eyeDirection" &&
      key !== "pose" &&
      key !== "expression" &&
      key !== "wardrobe" &&
      key !== "selfieType"
    )
    .map(([key, values]) => values[params[key]])
    .filter(Boolean)
    .join(", ");

  return `
    High quality realistic product photography of ${productMeta?.name}.
    Scene: ${scene}, ${environment}.
    Lighting: ${lighting}.
    Camera type: ${camera}.
    Camera distance: ${cameraDistance}.
    Composition: ${composition}.
    Visual styling: ${mapped}.
    Additional user instructions: ${userPrompt}.
    Ultra realistic, correct product scale, sharp details, no distortions.
  `;
}
