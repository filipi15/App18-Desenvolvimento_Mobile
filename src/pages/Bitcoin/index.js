import React from 'react';
import Conversor from '../../components/Conversor';

export default function Bitcoin() {
  return (
    <Conversor moeda="BitCoin" simbolo="₿" cotacao={409854.00} casas={8} />
  );
}
