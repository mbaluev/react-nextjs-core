import React from 'react';
import {
  fieldControlClassNames,
  MultiSelectExtFieldControl,
  MultiSelectExtFieldControlProps,
} from '@components/fields';
import {Tags, Tag} from '../../tag';

export type TagFieldControlProps<ItemType> = Omit<
  MultiSelectExtFieldControlProps<ItemType>,
  'renderOption' | 'renderValue'
> & {
  countField?: keyof ItemType;
  limitTags?: number;
};

export const TagFieldControl = <ItemType,>(
  props: TagFieldControlProps<ItemType>
) => {
  const {
    valueField = 'value' as keyof ItemType,
    labelField = 'label' as keyof ItemType,
    countField = 'count' as keyof ItemType,
    items,
    displayCheckboxes,
    limitTags,
    className,
    heightAuto,
    isEdit = true,
    ...other
  } = props;

  const cls = fieldControlClassNames('tag-field-control', props);

  const renderOption = (item: ItemType) => {
    return (
      <div className="tag-field-control__option">
        <Tag>{item[labelField]}</Tag>
        <div className="tag-field-control__option-count">
          {item[countField]}
        </div>
      </div>
    );
  };
  const renderValue = (items: ItemType[]) => {
    const limit = isEdit ? limitTags : undefined;
    return (
      <Tags>
        {items
          .filter((item, index) => (limit ? index < limit : true))
          .map((item, index) => {
            return <Tag key={index}>{item[labelField]}</Tag>;
          })}
        {limit && items.length > limit && (
          <div className="tag-field-control__tags-more">
            +{items.length - limit}
          </div>
        )}
      </Tags>
    );
  };

  return (
    <MultiSelectExtFieldControl
      className={cls}
      classNameMenu="tag-field-control__menu"
      items={items}
      valueField={valueField}
      labelField={labelField}
      renderOption={renderOption}
      renderValue={renderValue}
      displayCheckboxes={false}
      displaySelectedFirst={true}
      isEdit={isEdit}
      {...other}
    />
  );
};
