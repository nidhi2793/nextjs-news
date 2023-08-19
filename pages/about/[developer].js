import { useRouter } from "next/router";

// our-domain/about/developer

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const router = useRouter();
  const reqId = router.query.developer;
  const dev = details.filter((person) => person.id == reqId);
  console.log("dev", dev);
  return <div></div>;
};

export default Developer;
