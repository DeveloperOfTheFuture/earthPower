import {BuffType} from "../types/buffTypes.ts";
import {PositiveEffect, NegativeEffect} from "../types/effectType.ts";
import {Attacker} from "../interfaces/attacker.ts";

class PrimaryWeapon implements Attacker {
  damage: number;
  range: number;

  constructor(damage: number, range: number) {
    this.damage = damage;
    this.range = range;
  }

  attack() {
  }
}

class SecondaryWeapon {
  buffType: BuffType;
  positiveEffect: PositiveEffect | null = null;
  negativeEffect: NegativeEffect | null = null;

  constructor(
    buffType: BuffType,
    positiveEffect: PositiveEffect | null = null,
    negativeEffect: NegativeEffect | null = null
  ) {
    this.buffType = buffType;
    this.buffType === "positive" ?
      this.positiveEffect = positiveEffect
      :
      this.negativeEffect = negativeEffect;
  }
}
