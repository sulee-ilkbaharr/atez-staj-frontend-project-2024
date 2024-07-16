import Istate from "@/component/Istate";
import IProps from "@/component/props";


export default function Home() {
  return (
    <main >
      <IProps name={"test1"} />
      <IProps name={"test2"} />
      <IProps name={"test3"} />
      <IProps name={"test4"} />
      <Istate />
    </main>
  );
}
