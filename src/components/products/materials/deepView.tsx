import { useRouter } from "next/router"

const DeepView = () => {
	const router = useRouter()
	console.log(router);
	
	return (
		<div>DeepView</div>
	)
}
export default DeepView