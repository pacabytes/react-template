import React from 'react';
import { AttackProps, Attack } from './Attack';

interface AttackListProps {
  attacks: AttackProps[];
}

export const AttackList: React.FC<AttackListProps> = ({ attacks }) => (
  <dl>
    {attacks.map(attack => (
      <Attack key={attack.name} {...attack} />
    ))}
  </dl>
)
