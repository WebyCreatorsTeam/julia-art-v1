import CategoryList from "@/app/_components/Categories/CategoryList";
import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <button>Добавить категорию</button>
      <Suspense fallback={<>Loading</>}>
        <CategoryList />
      </Suspense>
    </section>
  );
}