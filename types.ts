import type { EyeDirectionKey } from './src/lib/promptEngine/parameterMap.types';

export interface MockupOptions {
  contentStyle: string;
  placementStyle: string;
  placementCamera: string;
  cameraDistance: string;
  cameraAngle?: string;
  cameraShot?: string;
  cameraMovement?: string;
  lighting: string;
  setting: string;
  ageGroup: string;
  camera: string;
  perspective: string;
  selfieType: string;
  ethnicity: string;
  gender: string;
  aspectRatio: string;
  environmentOrder: string;
  productPlane: string;
  personAppearance: string;
  hairColor: string;
  eyeColor: string;
  skinTone: string;
  productMaterial: string;
  productInteraction: string;
  realism: string;
  personPose: string;
  wardrobeStyle: string;
  personMood: string;
  personProps: string;
  microLocation: string;
  personExpression: string;
  hairStyle: string;
  eyeDirection?: EyeDirectionKey;
  proLens?: string;
  proLightingRig?: string;
  proPostTreatment?: string;
  skinRealism: string;
  creatorPreset?: string;
  appearanceLevel?: string;
  mood?: string;
  pose?: string;
  interaction2?: string;
  wardrobe?: string;
  props?: string;
  customProp?: string;
  customMicroLocation?: string;
  expression?: string;
  hairstyle?: string;
  compositionMode?: string;
  creationMode?: string;
  sidePlacement?: string;
  bgColor?: string;
}

export type OptionCategory = keyof MockupOptions;

export interface Option {
  label: string;
  value: string;
  tooltip?: string;
}

export type HeroLandingAlignment = 'left' | 'center' | 'right';
export type HeroLandingShadowStyle = 'softDrop' | 'hardDrop' | 'floating';

export type UGCRealModeSettings = {
  isEnabled: boolean;
  selectedRealityPresetId: string;
  selectedHeroPersonaIds: string[];
  selectedClothingPresetIds: string[];
  clothingUpload: File | null;
  clothingPreview: string | null;
  selectedExpressionId: string | null;
  blurAmount: number;
  grainAmount: number;
  lowResolution: boolean;
  imperfectLighting: boolean;
  offFocus: boolean;
  tiltedPhone: boolean;
  offCenterId: string;
  framingId: string;
};

export type PersonDetails = {
  ageGroup?: string;
  gender?: string;
  ethnicity?: string;
  skinTone?: string;
  hairType?: string;
  hairLength?: string;
  hairColor?: string;
  facialHair?: string;
  bodyType?: string;
  wardrobe?: string;
  pose?: string;
  eyeDirection?: MockupOptions['eyeDirection'];
};

export type PersonIdentityPackage = {
  modelReferenceBase64?: string;
  modelReferenceMime?: string;
  identityLock: boolean;
  personDetails?: PersonDetails;
};

export type ModelReferenceData = {
  base64: string;
  mimeType: string;
  previewUrl?: string; // App.tsx also used preview? verify. No, App only showed base64/mime.
};

export type StoryboardScene = {
  id: string;
  label: string;
  options: MockupOptions;
  proMode: boolean;
  supplementPreset: string;
  supplementPromptCue: string | null;
  supplementBackgroundColor: string;
  supplementAccentColor: string;
  supplementFlavorNotes: string;
  includeSupplementHand: boolean;
  heroPosePreset: string;
  heroPosePromptCue: string | null;
  supplementCustomPrompt: string;
  heroProductAlignment: HeroLandingAlignment;
  heroProductScale: number;
  heroShadowStyle: HeroLandingShadowStyle;
  ugcRealSettings: UGCRealModeSettings;
  formulationExpertEnabled: boolean;
  formulationExpertPreset: string;
  formulationExpertName: string;
  formulationExpertRole: string;
  formulationLabStyle: string;
  formulationExpertProfession: string;
  personIdentityPackage: PersonIdentityPackage;
  modelReferenceNotes: string;
};

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
  };
}
