import { useRouter } from "next/router";

// our-domain/news/detail

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <div>DetailNews</div>;
};

export default DetailPage;
