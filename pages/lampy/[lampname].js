import { useRouter } from 'next/router';

function Lampa() {
  const router = useRouter();
  const { lampname } = router.query;
  const data = router.query.data ? (JSON.parse(router.query.data)) : null;
  console.log(data);
  return (
    <div className="flex min-h-screen">
      <div> Tutaj będzie opis lampy</div>
      <div> Wybrana lampa:{data.name}</div>
      <div>{data.description}</div>

    </div>
  );
}

export default Lampa;
