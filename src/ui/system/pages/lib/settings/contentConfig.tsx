import {IContentItemProps} from '@components/content';
import {AccordionControls} from '@ui/system/pages/lib/sections/AccordionControls';
import {ButtonControls} from '@ui/system/pages/lib/sections/ButtonControls';
import {CheckboxFieldControls} from '@ui/system/pages/lib/sections/CheckboxFieldControls';
import {CountFieldControls} from '@ui/system/pages/lib/sections/CountFieldControls';
import {DateFieldControls} from '@ui/system/pages/lib/sections/DateFieldControls';
import {ModalControls} from '@ui/system/pages/lib/sections/ModalControls';
import {MultiSelectExtFieldControls} from '@ui/system/pages/lib/sections/MultiSelectExtFieldControls';
import {MultiSelectFieldControls} from '@ui/system/pages/lib/sections/MultiSelectFieldControls';
import {PasswordFieldControls} from '@ui/system/pages/lib/sections/PasswordFieldControls';
import {RadioGroupFieldControls} from '@ui/system/pages/lib/sections/RadioGroupFieldControls';
import {SelectFieldControls} from '@ui/system/pages/lib/sections/SelectFieldControls';
import {SliderFieldControls} from '@ui/system/pages/lib/sections/SliderFieldControls';
import {SwitchFieldControls} from '@ui/system/pages/lib/sections/SwitchFieldControls';
import {TabControls} from '@ui/system/pages/lib/sections/TabControls';
import {TagFieldControls} from '@ui/system/pages/lib/sections/TagFieldControls';
import {TextFieldControls} from '@ui/system/pages/lib/sections/TextFieldControls';
import {ToggleButtonControls} from '@ui/system/pages/lib/sections/ToggleButtonControls';

export const LIB_CONTENT_CONFIG: IContentItemProps[] = [
  {
    id: 'accordion',
    label: 'Accordion',
    content: <AccordionControls />,
  },
  {
    id: 'button',
    label: 'Button',
    content: <ButtonControls />,
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    content: <CheckboxFieldControls />,
  },
  {
    id: 'count',
    label: 'Count',
    content: <CountFieldControls />,
  },
  {
    id: 'date',
    label: 'Date',
    content: <DateFieldControls />,
  },
  {
    id: 'modal',
    label: 'Modal',
    content: <ModalControls />,
  },
  {
    id: 'multi-select-ext',
    label: 'MultiSelectExt',
    content: <MultiSelectExtFieldControls />,
  },
  {
    id: 'multi-select',
    label: 'MultiSelect',
    content: <MultiSelectFieldControls />,
  },
  {
    id: 'password',
    label: 'Password',
    content: <PasswordFieldControls />,
  },
  {
    id: 'radio',
    label: 'Radio',
    content: <RadioGroupFieldControls />,
  },
  {
    id: 'select',
    label: 'Select',
    content: <SelectFieldControls />,
  },
  {
    id: 'slider',
    label: 'Slider',
    content: <SliderFieldControls />,
  },
  {
    id: 'switch',
    label: 'Switch',
    content: <SwitchFieldControls />,
  },
  {
    id: 'tab',
    label: 'Tab',
    content: <TabControls />,
  },
  {
    id: 'tag',
    label: 'Tag',
    content: <TagFieldControls />,
  },
  {
    id: 'text',
    label: 'Text',
    content: <TextFieldControls />,
  },
  {
    id: 'toggle',
    label: 'Toggle',
    content: <ToggleButtonControls />,
  },
];
