import React, {useState} from 'react';
import {FormSection} from '@components/form';
import {ITabItemProps, Tabs} from '@components/tab';

enum tabNames {
  description = 'description',
  compatible = 'compatible',
  warranty = 'warranty',
  reviews = 'reviews',
  compare = 'compare',
}
const TAB_CONFIG: ITabItemProps[] = [
  {
    label: 'Product description',
    value: tabNames.description,
    content: tabNames.description,
  },
  {
    label: 'Compatible Products',
    value: tabNames.compatible,
    content: tabNames.compatible,
  },
  {
    label: 'Returns & warranty',
    value: tabNames.warranty,
    content: tabNames.warranty,
  },
  {
    label: 'Reviews & testimonials',
    value: tabNames.reviews,
    content: tabNames.reviews,
  },
  {
    label: 'Compare',
    value: tabNames.compare,
    content: tabNames.compare,
  },
];

export const TabControls = () => {
  const [active, setActive] = useState<string>(TAB_CONFIG[0].value);

  const onChangeTab = (_: React.ChangeEvent<{}>, value: string) => {
    setActive(value);
  };

  return (
    <FormSection title="Tabs" id="tab">
      <Tabs tabs={TAB_CONFIG} activeTab={active} onChangeTab={onChangeTab} />
    </FormSection>
  );
};
