import { useState } from "react";

type MonsterProps = {
  name: string;
  type: string;
  current_health: number;
  attack_damage: number;
};

function Monster({ name, type, current_health, attack_damage }: MonsterProps) {
    return (
    <div className="monster-card">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Health: {current_health}</p>
      <p>Attack Damage: {attack_damage}</p>
    </div>
  );
}

export default Monster;
