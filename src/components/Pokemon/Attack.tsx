import React from 'react';

export interface AttackProps {
  name: string;
  type: string;
  damage: number;
}

export const Attack: React.FC<AttackProps> = ({ name, type, damage }) => (
  <>
    <dt>{name}</dt>
    <dd>Type: {type} ({damage} damage)</dd>
  </>
)
