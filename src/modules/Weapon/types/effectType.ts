import {PositiveTypeEffectsEnum} from "../enums/positiveEffects/positiveTypeEffectsEnum.ts";
import {PositiveEffectsEnum} from "../enums/positiveEffects/positiveEffectsEnum.ts";
import {NegativeTypeEffectsEnum} from "../enums/negativeEffects/negativeTypeEffectsEnum.ts";
import {NegativeEffectsEnum} from "../enums/negativeEffects/negativeEffectsEnum.ts";

export type PositiveEffect = { id: number, effectType: PositiveTypeEffectsEnum, effect: PositiveEffectsEnum };
export type NegativeEffect = { id: number, effectType: NegativeTypeEffectsEnum, effect: NegativeEffectsEnum };
