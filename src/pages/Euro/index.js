import React from 'react';
import Conversor from '../../components/Conversor';

export default function Euro() {
  return (
    <Conversor moeda="Euro" simbolo="€" cotacao={6.24} casas={2} />
  );
}
