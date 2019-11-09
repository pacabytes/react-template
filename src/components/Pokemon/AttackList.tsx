import React from 'react';
import { Attack } from './Attack';
import { Attack as AttackType } from '../../graphql/hooks';

interface AttackListProps {
  attacks: AttackType[];
}

export const AttackList: React.FC<AttackListProps> = ({ attacks }) => (
  <dl>
    {attacks.map(attack => (
      <Attack key={attack.name} {...attack} />
    ))}
  </dl>
)
