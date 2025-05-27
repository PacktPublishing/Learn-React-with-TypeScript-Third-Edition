import { useState } from 'react';
import { IdValue } from './types';

export function useChecked() {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);
  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = checkedIds.includes(checkedId);
    const newCheckedIds = isChecked
      ? checkedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
      : checkedIds.concat(checkedId);
    setCheckedIds(newCheckedIds);
  };
  return { handleCheckChange, checkedIds };
}
