import { ComponentPropsWithoutRef, useState, type ReactNode } from 'react';
import { IdValue } from './types';

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode;
} & ComponentPropsWithoutRef<'ul'>;

export function Checklist<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  ...ulProps
}: Props<Data>) {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = checkedIds.includes(checkedId);
    const newCheckedIds = isChecked
      ? checkedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
      : checkedIds.concat(checkedId);
    setCheckedIds(newCheckedIds);
  };
  return (
    <ul {...ulProps}>
      {data.map((item) => {
        if (renderItem) {
          return renderItem(item);
        }
        const idValue = item[id] as unknown;
        if (typeof idValue !== 'string' && typeof idValue !== 'number') {
          return null;
        }
        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== 'string') {
          return null;
        }
        const secondaryText = item[secondary] as unknown;
        return (
          <li key={idValue}>
            <label>
              <input
                type="checkbox"
                checked={checkedIds.includes(idValue)}
                onChange={handleCheckChange(idValue)}
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
