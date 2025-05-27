import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

export function Tab({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const params = useSearchParams();
  const activeTab =
    params.get('tab') ?? 'address';
  const router = useRouter();
  return (
    <button
      type="button"
      className={
        activeTab === name ? 'active' : ''
      }
      onClick={() => router.push(`/?tab=${name}`)}
    >
      {label}
    </button>
  );
}
