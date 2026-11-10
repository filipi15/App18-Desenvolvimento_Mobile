import React from 'react';
import Conversor from '../../components/Conversor';

export default function Dolar() {
  return (
    <Conversor moeda="Dólar" simbolo="US$" cotacao={5.58} casas={2} />
  );
}
