import {PositiveTypeEffectsEnum} from "../enums/positiveEffects/positiveTypeEffectsEnum.ts";
import {PositiveEffectsEnum} from "../enums/positiveEffects/positiveEffectsEnum.ts";
import {PositiveEffect} from "../types/effectType.ts";

// Здесь перечисляются все позитивные эффекты, которые действуют на персонажа/оружие
export const positiveEffectsArray: PositiveEffect[] = [
  {id: 0, effectType: PositiveTypeEffectsEnum.SELF_USE, effect: PositiveEffectsEnum.HEAL},
  {id: 1, effectType: PositiveTypeEffectsEnum.SELF_USE, effect: PositiveEffectsEnum.REMOVING_CONTROL_EFFECTS}
];
