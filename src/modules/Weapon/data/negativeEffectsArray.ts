import {NegativeEffect} from "../types/effectType.ts";
import {NegativeTypeEffectsEnum} from "../enums/negativeEffects/negativeTypeEffectsEnum.ts";
import {NegativeEffectsEnum} from "../enums/negativeEffects/negativeEffectsEnum.ts";

// Здесь перечислены все отрицательные эффекты контроля
export const negativeEffectsArray: NegativeEffect[] = [
  {id: 0, effectType: NegativeTypeEffectsEnum.ONE_TARGET, effect: NegativeEffectsEnum.POISONING},
  {id: 1, effectType: NegativeTypeEffectsEnum.ONE_TARGET, effect: NegativeEffectsEnum.SUPPRESSION},
]
