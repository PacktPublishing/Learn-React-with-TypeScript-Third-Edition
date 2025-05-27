import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useChecked } from './useChecked';
import { IdValue } from './types';
import { isChecked } from './isChecked';
import { assertValueCanBeRendered } from './assertValueCanBeRendered';

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data, isChecked: boolean) => ReactNode;
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
} & ComponentPropsWithoutRef<'ul'>;

export function Checklist<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  checkedIds,
  onCheckedIdsChange,
  ...ulProps
}: Props<Data>) {
  const { resolvedCheckedIds, handleCheckChange } = useChecked({
    checkedIds,
    onCheckedIdsChange,
  });
  return (
    <ul {...ulProps}>
      {data.map((item) => {
        const idValue = item[id] as unknown;
        assertValueCanBeRendered(idValue);
        if (renderItem) {
          return renderItem(item, isChecked(resolvedCheckedIds, idValue));
        }
        const primaryText = item[primary] as unknown;
        assertValueCanBeRendered(primaryText);
        const secondaryText = item[secondary] as unknown;
        return (
          <li key={idValue}>
            <label>
              <input
                type="checkbox"
                checked={isChecked(resolvedCheckedIds, idValue)}
                onChange={handleCheckChange(idValue)}
                data-testid={`Checklist__input__${idValue.toString()}`}
              />
              <div>
                <div className="primary">{primaryText}</div>
                {typeof secondaryText === 'string' && (
                  <div className="secondary">{secondaryText}</div>
                )}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
