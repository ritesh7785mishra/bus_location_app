import { redirect } from "next/navigation";

export default function Home() {
	const toLogin = () => {
		redirect("/login");
	};
	toLogin();
	return <div className="bg-slate-600 ml-4">I am working fine</div>;
}
