import { useState, useEffect } from 'react';
import { IdValue } from './types';

export function useChecked({
  checkedIds,
  onCheckedIdsChange,
}: {
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
}) {
  const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || []);
  useEffect(() => {
    const isControlled = checkedIds !== undefined;
    if (isControlled) {
      setResolvedCheckedIds(checkedIds);
    }
  }, [checkedIds]);

  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = resolvedCheckedIds.includes(checkedId);
    const newCheckedIds = isChecked
      ? resolvedCheckedIds.filter((itemCheckedid) => itemCheckedid !== checkedId)
      : resolvedCheckedIds.concat(checkedId);
    if (onCheckedIdsChange) {
      onCheckedIdsChange(newCheckedIds);
    }
    setResolvedCheckedIds(newCheckedIds);
  };
  return { handleCheckChange, resolvedCheckedIds };
}
