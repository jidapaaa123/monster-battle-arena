import { useState } from "react";
import "./App.css";
import Monster from "./components/Monster";
import AttackButton from "./components/AttackButton";

function App() {
  const [monsterName, monsterType, monsterDamage]: [string, string, number] = [
    "Cave Troll",
    "Beast",
    15,
  ];
  const [monsterHealth, setMonsterHealth] = useState<number>(100);
  const [normalDamage, heavyDamage, ultimateDamage]: [number, number, number] =
    [10, 20, 30];
  const handleAttack = (dmg: number) => {
    setMonsterHealth((prev) => Math.max(prev - dmg, 0));
  };
  const monsterStatus: string =
    monsterHealth == 0
      ? "The monster has been defeated!"
      : "The monster is still fighting!";

  const [playerName, setPlayerName] = useState<string>("Marvelous Warrior");

  return (
    <>
      <div>
        <h1>MONSTER BATTLE ARENA</h1>
        <div className="input-form">
          <label htmlFor="">Player Name: </label>
          <input
            id="playerName"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          ></input>
        </div>
        
        <h2>
          {playerName} vs. {monsterName}
        </h2>
        <Monster
          name={monsterName}
          type={monsterType}
          current_health={monsterHealth}
          attack_damage={monsterDamage}
        ></Monster>
        <AttackButton
          onAttack={() => handleAttack(normalDamage)}
          attackName="Normal"
        ></AttackButton>
        <AttackButton
          onAttack={() => handleAttack(heavyDamage)}
          attackName="Heavy"
        ></AttackButton>
        <AttackButton
          onAttack={() => handleAttack(ultimateDamage)}
          attackName="Ultimate"
        ></AttackButton>
        <h3>{monsterStatus}</h3>
      </div>
    </>
  );
}

export default App;
