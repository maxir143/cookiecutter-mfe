import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

interface Props {}

export const AppLoading: React.FC<Props> = ({}) => {
  return <ProgressSpinner />;
};
