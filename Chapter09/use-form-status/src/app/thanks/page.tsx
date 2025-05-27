export default async function Thanks({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  return (
    <main>
      <h2>Form successfully submitted</h2>
      Thank you {(await searchParams).name}, we
      will be in touch soon.
    </main>
  );
}
