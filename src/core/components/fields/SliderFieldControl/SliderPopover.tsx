import React, {useState} from 'react';
import {Popover, Slider} from '@mui/material';
import {Button} from '@components/button';

export interface ISliderPopoverProps {
  anchorEl: HTMLDivElement | null;
  open: boolean;
  onClose: () => void;
  value?: number | number[];
  setValue: (value?: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number | null;
}

export const SliderPopover = (props: ISliderPopoverProps) => {
  const {
    anchorEl,
    onClose,
    open,
    value,
    setValue,
    min = 0,
    max = 100,
    step,
  } = props;

  const [state, setState] = useState<undefined | number | number[]>(
    value || [min, max]
  );

  const handleClear = () => {
    setValue(Array.isArray(value) ? [min, max] : undefined);
    setState(Array.isArray(value) ? [min, max] : undefined);
    onClose();
  };
  const handleChange = (_event: any, newValue?: number | number[]) => {
    setState(newValue);
  };
  const handleSubmit = () => {
    setValue(state);
    onClose();
  };

  return (
    <Popover
      id={open ? 'simple-popover' : undefined}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
      transformOrigin={{vertical: -8, horizontal: 'left'}}
      className="slider-field-control__popover"
      marginThreshold={10}
      PaperProps={{
        style: {
          width: anchorEl?.clientWidth,
        },
      }}
    >
      <div className="slider-field-control__popover-root">
        <div className="slider-field-control__popover-content">
          <Slider
            value={state}
            onChange={handleChange}
            aria-labelledby="range-slider"
            valueLabelDisplay="on"
            min={min}
            max={max}
            step={step}
          />
        </div>
        <div className="slider-field-control__popover-buttons">
          <Button size="small" variant="text" color="red" onClick={handleClear}>
            Clear
          </Button>
          <Button
            size="small"
            variant="contained"
            color="blue"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Popover>
  );
};
