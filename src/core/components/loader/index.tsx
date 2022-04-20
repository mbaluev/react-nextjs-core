import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './index.scss';

export interface ILoaderProps {
  loading?: boolean;
  backdrop?: boolean;
  size?: number;
}

export const Loader = (props: ILoaderProps) => {
  const {loading, backdrop, size} = props;
  return loading ? (
    <div className="loader">
      {backdrop && <div className="loader-backdrop" />}
      <CircularProgress size={size} />
    </div>
  ) : null;
};
