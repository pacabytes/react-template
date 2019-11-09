import React from 'react';
import { Attack as AttackType } from '../../graphql/hooks';

export const Attack: React.FC<AttackType> = ({ name, type, damage }) => (
  <>
    <dt>{name}</dt>
    <dd>Type: {type} ({damage} damage)</dd>
  </>
)
